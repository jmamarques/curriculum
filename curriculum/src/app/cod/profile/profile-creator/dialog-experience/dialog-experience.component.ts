import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSocialNetworksComponent } from '../dialog-social-networks/dialog-social-networks.component';
import { ErrorStateMatcher, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { Experience } from 'src/app/shared/interfaces/profile';
import { EmploymentTypeService } from 'src/app/core/services/employment-type.service';


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
  minMode: BsDatepickerViewMode = 'month';
  bsConfig: Partial<BsDatepickerConfig>;
  currentAndEndDateChecked: boolean = false;
  jobType: string;
  employmentTypeList : string[];
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Experience,
    private employmentService : EmploymentTypeService
  ) {
  }
  ngOnInit(): void {
    //Experience FormGroup Creation
    const editModeEducation: boolean = this.data && this.data.type === 'Education';
    const editModeJob: boolean = this.data && this.data.type === 'Job';

    this.experienceForm = this.formBuilder.group({
      type: [editModeEducation ? this.data.type : '', Validators.required],
      startDate: [editModeEducation ? this.data.startDate : '', Validators.required],
      endDate: [editModeEducation ? this.data.endDate : '', Validators.required],
      currentSituation: [editModeEducation ? this.data.currentSituation : '', Validators.required],
      organization: [editModeEducation ? this.data.organization : '', Validators.required],
      title: [editModeEducation ? this.data.title : '', Validators.required],
      customRole: [editModeEducation ? this.data.customRole : '', Validators.required],
      description: [editModeEducation ? this.data.description : '', Validators.required],
    });

    //ExperienceJob FormGroup Creation
    this.experienceFormJob = this.formBuilder.group({
      type: [editModeJob ? this.data.type : '', Validators.required],
      title: [editModeJob ? this.data.title : '', Validators.required],
      customRole: [editModeJob ? this.data.customRole : '', Validators.required],
      organization: [editModeJob ? this.data.organization : '', Validators.required],
      location: [editModeJob ? this.data.location : '', Validators.required],
      startDate: [editModeJob ? this.data.startDate : '', Validators.required],
      endDate: [editModeJob ? this.data.endDate : '', Validators.required],
      currentSituation: [editModeJob ? this.data.currentSituation : '', Validators.required],
      description: [editModeJob ? this.data.description : '', Validators.required],
    });
    this.bsConfig = Object.assign({}, {
      minMode: this.minMode
    });
    if (this.data) {
      this.typeExperience = this.data.type;
    }
    this.employmentTypeList = this.employmentService.getEmploymentType();
  }
  submitEducationExperience(): void {
    const educationExperience: Experience = this.experienceForm.value;
    educationExperience.type = this.typeExperience;
    console.warn(educationExperience);
    this.dialogRef.close(educationExperience);
  }
  submitJobExperience(): void {
    const jobExperience: Experience = this.experienceFormJob.value;
    jobExperience.type = this.typeExperience;
    this.dialogRef.close(jobExperience);
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
