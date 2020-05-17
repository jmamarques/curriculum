import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSocialNetworksComponent } from '../dialog-social-networks/dialog-social-networks.component';
import { SocialNetworksService } from 'src/app/core/services/social-networks.service';
import { DialogData } from 'src/app/shared/interfaces/dialog-data';
import { ErrorStateMatcher, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { UserProfileExperienceData } from 'src/app/shared/interfaces/user-profile-experience-data';


@Component({
  selector: 'cod-dialog-experience',
  templateUrl: './dialog-experience.component.html',
  styleUrls: ['./dialog-experience.component.scss'],
})
export class DialogExperienceComponent implements OnInit {
  experienceForm: FormGroup;
  experienceFormJob: FormGroup;
  hideRequiredControl = new FormControl(false);
  matcher = new MyErrorStateMatcher();
  typeExperience: string;
  bsValue: Date;
  bsValue2: Date;
  bsValue3: Date;
  bsValue4: Date;
  minMode: BsDatepickerViewMode = 'month';
  bsConfig: Partial<BsDatepickerConfig>;
  bsConfig2: Partial<BsDatepickerConfig>;
  bsConfig3: Partial<BsDatepickerConfig>;
  bsConfig4: Partial<BsDatepickerConfig>;
  currentAndEndDateChecked: boolean = false;
  employmentTypeList: string[] = ['Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship', 'Apprenticeship'];
  jobType: string;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserProfileExperienceData,
  ) {
  }
  ngOnInit(): void {
    //Experience FormGroup Creation
    this.experienceForm = this.formBuilder.group({
      typeExperience: [this.data &&this.data.type==='Education'? this.data.type : '', Validators.required],
      startDate: [this.data &&this.data.type==='Education'? this.data.startDate : '', Validators.required],
      endDate: [this.data &&this.data.type==='Education'? this.data.endDate : '', Validators.required],
      isActive: [this.data &&this.data.type==='Education'? this.data.currenSituation : '', Validators.required],
      schoolName: [this.data &&this.data.type==='Education'? this.data.oranization : '', Validators.required],
      degree: [this.data &&this.data.type==='Education'? this.data.title : '', Validators.required],
      grade: [this.data &&this.data.type==='Education'? this.data.typeExperience : '', Validators.required],
      description: [this.data &&this.data.type==='Education'? this.data.description : '', Validators.required],
    });

    //ExperienceJob FormGroup Creation
    this.experienceFormJob = this.formBuilder.group({
      typeExperience: [this.data &&this.data.type==='Job'? this.data.type : '', Validators.required],
      titleJob: [this.data &&this.data.type==='Job'? this.data.title : '', Validators.required],
      jobType: [this.data &&this.data.type==='Job'? this.data.typeExperience : '', Validators.required],
      companyName: [this.data &&this.data.type==='Job'? this.data.oranization : '', Validators.required],
      location: [this.data &&this.data.type==='Job'? this.data.location : '', Validators.required],
      startDateJob: [this.data &&this.data.type==='Job'? this.data.startDate : '', Validators.required],
      endDateJob: [this.data &&this.data.type==='Job'? this.data.endDate : '', Validators.required],
      isActiveJob: [this.data &&this.data.type==='Job'? this.data.currenSituation : '', Validators.required],
      descriptionJob: [this.data &&this.data.type==='Job'? this.data.description : '', Validators.required],
    });
    this.bsConfig = Object.assign({}, {
      minMode: this.minMode
    });
    this.bsConfig2 = Object.assign({}, {
      minMode: this.minMode
    });
    this.bsConfig3 = Object.assign({}, {
      minMode: this.minMode
    });
    this.bsConfig4 = Object.assign({}, {
      minMode: this.minMode
    });
    if (this.data) {
      this.typeExperience = this.data.type;
    }
  }
  submitExperienceForm(): void {
    let result: boolean = true;
    for (const elem in this.experienceForm.controls) {
      if (elem != 'isActive' && elem != 'endDate'&&elem != 'typeExperience') {
        result = result && this.experienceForm.controls[elem].valid;
      }
    }
    if (this.experienceForm.controls['isActive'].valid === this.experienceForm.controls['endDate'].valid) {
      this.currentAndEndDateChecked = true;
    } else {
      if (result && (this.experienceForm.controls['isActive'].valid || this.experienceForm.controls['endDate'].valid)) {
        //We have the form valid
        //Now we can send the data to the main class
        let indexValue = null;
        if (this.data) {
          indexValue = this.data.indexOnListSource
        }
        let datatoSend: UserProfileExperienceData = {
          type: this.typeExperience,
          oranization: this.experienceForm.get('schoolName')?.value,
          title: this.experienceForm.get('degree')?.value,
          startDate: this.experienceForm.get('startDate')?.value,
          endDate: this.experienceForm.get('endDate')?.value,
          currenSituation: this.experienceForm.get('isActive')?.value,
          typeExperience: this.experienceForm.get('grade')?.value,
          description: this.experienceForm.get('description')?.value,
          indexOnListSource: indexValue
        };
        this.dialogRef.close(datatoSend);
      }
    }

  }
  submitJobExperience(): void {
    let result: boolean = true;
    for (const elem in this.experienceFormJob.controls) {
      if (elem != 'isActiveJob' && elem != 'endDateJob'&&elem != 'typeExperience') {
        result = result && this.experienceFormJob.controls[elem].valid;
      }

    }
    if (this.experienceFormJob.controls['isActiveJob'].valid === this.experienceFormJob.controls['endDateJob'].valid) {
      this.currentAndEndDateChecked = true;
    } else {
      if (result && (this.experienceFormJob.controls['isActiveJob'].valid || this.experienceFormJob.controls['endDateJob'].valid)) {
        //We have the form valid
        //Now we can send the data to the main class
        let indexValue = null;
        if (this.data) {
          indexValue = this.data.indexOnListSource
        }
        let datatoSend: UserProfileExperienceData = {
          type: this.typeExperience,
          oranization: this.experienceFormJob.get('companyName')?.value,
          title: this.experienceFormJob.get('titleJob')?.value,
          startDate: this.experienceFormJob.get('startDateJob')?.value,
          endDate: this.experienceFormJob.get('endDateJob')?.value,
          currenSituation: this.experienceFormJob.get('isActiveJob')?.value,
          typeExperience: this.experienceFormJob.get('jobType')?.value,
          description: this.experienceFormJob.get('descriptionJob')?.value,
          indexOnListSource: indexValue,
          location:this.experienceFormJob.get('location')?.value,
        };
        this.dialogRef.close(datatoSend);
      }
    }

  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
