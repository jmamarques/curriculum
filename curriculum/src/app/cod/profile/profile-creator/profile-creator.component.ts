import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { SocialData } from 'src/app/shared/interfaces/social-data';
import { MatDialog } from '@angular/material/dialog';
import { DialogSocialNetworksComponent } from './dialog-social-networks/dialog-social-networks.component';
import { DialogExperienceComponent } from './dialog-experience/dialog-experience.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserProfileExperienceData } from 'src/app/shared/interfaces/user-profile-experience-data';

@Component({
  selector: 'cod-profile-creator',
  templateUrl: './profile-creator.component.html',
  styleUrls: ['./profile-creator.component.scss']
})
export class ProfileCreatorComponent implements OnInit {

/* **************Profile Details Variables**************** */
/* ****************************************************** */
/* ***************************************************** */

  matcher = new MyErrorStateMatcher();
  profileDetailsForm: FormGroup;
  //Countries List Variables
  dropdown: any[] = [
    { code: 'pt', country: 'Portugal' }, { code: 'ang', country: 'Angola' }, { code: 'monc', country: 'Monçabique' }, {
      code: 'it',
      country: 'Italy'
    }
  ];
  // Value for Country DropDown
  dropdownValue = 'countryList';
  //Image Variables
  imagePath: any;
  imgURL: any;
  message: string;
  // list of users social networks
  socialList: SocialData[] = [];
  //List Of Boolean VAriables for stepper Error Controller
  formProfileDetailsValid = true;

/* **************Experience User Variables**************** */
/* ****************************************************** */
/* ***************************************************** */
  userExperienceArray: UserProfileExperienceData [] = [];

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }
  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
    //Profile Details FormGroup Creation
    this.profileDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      adress: ['', Validators.required],
      birthDate: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.imgURL = '../../../assets/profilepic.png';
  }

  preview(files: any) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
  }

  openDialog() {
    let nameSocial: string[] = [];
    this.socialList.forEach(x => { nameSocial.push(x.socialContent.name) });
    const dialog = this.dialog.open(DialogSocialNetworksComponent, { data: { listNames: nameSocial } });
    dialog.afterClosed().subscribe(result => {
      console.warn('Added new Social Network');
      if (result) {
        console.warn(result);
        this.socialList.push(result);
      }
    });
  }

  openExperienceDialog() {
    const dialog = this.dialog.open(DialogExperienceComponent);
     dialog.afterClosed().subscribe(result => {
      console.warn('Added new Experience of User');
      if (result ) {
        if (result.indexOnListSource) {
           this.userExperienceArray[result.indexOnListSource]= result;
        }else{
          this.userExperienceArray.push(result);
        }
      }
    });
    console.warn(this.userExperienceArray);
  }

  editExperienceDialog(index:number){
    const experienceUserToSend = this.userExperienceArray[index];
    experienceUserToSend.indexOnListSource = index;
    const dialog = this.dialog.open(DialogExperienceComponent, { data: experienceUserToSend});
    dialog.afterClosed().subscribe(result => {
         this.userExperienceArray[result.indexOnListSource] = result
   });

  }

  removeBadge(socialName: string) {
    for (let index = 0; index < this.socialList.length; index++) {
      if (this.socialList[index].socialContent.name === socialName) {
        this.socialList.splice(index, 1);
      }
    }
  }

  submitProfileDetails(): void {
    console.warn('Submited Profile Details');
    this.checkAllUserDetails();
  }

  checkAllUserDetails(): void {
    let result : boolean = true;
    for (const elem in this.profileDetailsForm.controls) {
      result = result && this.profileDetailsForm.controls[elem].valid;
    }
    this.formProfileDetailsValid = !result;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
