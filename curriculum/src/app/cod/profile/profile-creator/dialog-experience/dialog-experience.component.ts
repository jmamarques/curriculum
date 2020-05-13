import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSocialNetworksComponent } from '../dialog-social-networks/dialog-social-networks.component';
import { SocialNetworksService } from 'src/app/core/services/social-networks.service';
import { DialogData } from 'src/app/shared/interfaces/dialog-data';
import { ErrorStateMatcher, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'cod-dialog-experience',
  templateUrl: './dialog-experience.component.html',
  styleUrls: ['./dialog-experience.component.scss'],
})
export class DialogExperienceComponent implements OnInit {
  experienceForm : FormGroup;
  hideRequiredControl = new FormControl(false);
  matcher = new MyErrorStateMatcher();
  typeExperience : string;
  bsValue: Date  ;
  bsValue2: Date ;
  minMode: BsDatepickerViewMode = 'month';
  bsConfig: Partial<BsDatepickerConfig>;
  bsConfig2: Partial<BsDatepickerConfig>;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogSocialNetworksComponent>,
    private socialNetworksService: SocialNetworksService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
         //Experience FormGroup Creation
         this.experienceForm = this.formBuilder.group({
          titleJob:['',Validators.required],
          typeExperience:['',Validators.required],
          startDate:['',Validators.required],
          endDate:['',Validators.required],
          isActive:['',Validators.required],
          schoolName:['',Validators.required],
          degree:['',Validators.required],
          grade:['',Validators.required],
          description:['',Validators.required],
           });
         this.bsConfig = Object.assign({}, {
          minMode : this.minMode
        });
        this.bsConfig2 = Object.assign({}, {
          minMode : this.minMode
        });
  }
  submitExperienceForm():void{
    //TODO
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
