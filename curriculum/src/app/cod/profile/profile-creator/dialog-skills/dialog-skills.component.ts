import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSocialNetworksComponent } from '../dialog-social-networks/dialog-social-networks.component';
import { DialogData } from 'src/app/shared/interfaces/dialog-data';
import { ErrorStateMatcher } from '@angular/material/core';
import { SkillsService } from 'src/app/core/services/skills.service';
import { SkillsData } from 'src/app/shared/interfaces/skills-data';

@Component({
  selector: 'cod-dialog-skills',
  templateUrl: './dialog-skills.component.html',
  styleUrls: ['./dialog-skills.component.scss']
})
export class DialogSkillsComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  skillList: string[];
  skillSelected: string;
  noSkillSelectedError: boolean = false;
  contentSkillSelected: string;
  bullets: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedValue: number;
  skillForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogSocialNetworksComponent>,
    private skillsService: SkillsService,
    @Inject(MAT_DIALOG_DATA) public data: SkillsData,
  ) { }

  ngOnInit(): void {
    this.skillList = this.skillsService.getSkillTypeList();
    this.skillForm = this.formBuilder.group({
      skillType: [this.data? this.data.skillType:'', Validators.required],
      skillName: [this.data? this.data.skillContent:'', Validators.required]
    });
    if (this.data) {
      this.selectedValue = this.data.skillpercentage;
      this.contentSkillSelected = this.data.skillContent;
      this.skillSelected =  this.data.skillType;
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
      let dialogDataSkill: SkillsData = {
        skillType:this.skillSelected,
        skillContent : this.contentSkillSelected,
        skillpercentage: this.selectedValue
      };
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
