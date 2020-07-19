import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSocialNetworksComponent } from '../dialog-social-networks/dialog-social-networks.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { SkillsService } from 'src/app/core/services/skills.service';
import { Skill } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'cod-dialog-skills',
  templateUrl: './dialog-skills.component.html',
  styleUrls: ['./dialog-skills.component.scss']
})
export class DialogSkillsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  skillList: string[];
  noSkillSelectedError: boolean = false;
  bullets: number[] =[];
  selectedValue: number;
  skillForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogSocialNetworksComponent>,
    private skillsService: SkillsService,
    @Inject(MAT_DIALOG_DATA) public data: Skill,
  ) { }

  ngOnInit(): void {
    this.skillList = this.skillsService.getSkillTypeList();
    this.skillForm = this.formBuilder.group({
      type: [this.data? this.data.type:'', Validators.required],
      name: [this.data? this.data.name:'', Validators.required]
    });
    if (this.data) {
      this.selectedValue = this.data.percentage;
    }
    for (let index = 1; index <= 10; index++) {
      this.bullets.push(index);

    }
  }

  saveCurrentBullet(bulletNumber: any) {
    this.selectedValue = bulletNumber;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.skillForm.invalid) {
      return;
    }
    //check the skill level if is filled
    if (!this.selectedValue) {
      this.noSkillSelectedError = true;
      return;
    }else{
      let dialogDataSkill : Skill= this.skillForm.value ;
      dialogDataSkill.percentage = this.selectedValue;

      this.dialogRef.close(dialogDataSkill);
    }
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
