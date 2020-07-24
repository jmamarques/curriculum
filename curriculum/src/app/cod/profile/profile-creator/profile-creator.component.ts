import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DialogSocialNetworksComponent} from './dialog-social-networks/dialog-social-networks.component';
import {ErrorStateMatcher} from '@angular/material/core';
import {Profile, SocialData, UserDetails} from 'src/app/shared/interfaces/profile';
import {CountriesService} from 'src/app/core/services/countries.service';

@Component({
  selector: 'cod-profile-creator',
  templateUrl: './profile-creator.component.html',
  styleUrls: ['./profile-creator.component.scss']
})
export class ProfileCreatorComponent implements OnInit {
  profile = {} as Profile;
  /* **************Profile Details Variables**************** */
  /* ****************************************************** */
  /* ***************************************************** */
  countryList: any = [];
  matcher = new MyErrorStateMatcher();
  profileDetailsForm: FormGroup;

  // Image Variables
  imagePath: any;
  imgURL: any;
  message: string;
  // list of users social networks
  socialList: SocialData[] = [];
  // List Of Boolean VAriables for stepper Error Controller
  formProfileDetailsValid = true;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, public countryService: CountriesService) {
  }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
    // Profile Details FormGroup Creation
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
    this.countryList = this.countryService.getCountriesList();
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
    const nameSocial: string[] = [];
    this.socialList.forEach(x => {
      nameSocial.push(x.socialContent.name);
    });
    const dialog = this.dialog.open(DialogSocialNetworksComponent, {data: {listNames: nameSocial}});
    dialog.afterClosed().subscribe(result => {
      console.warn('Added new Social Network');
      if (result) {
        console.warn(result);
        this.socialList.push(result);
      }
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
    this.checkAllUserDetails();
    this.saveProfileDetails();
  }

  checkAllUserDetails(): void {
    let result = true;
    for (const elem of Object.keys(this.profileDetailsForm.controls)) {
      result = result && this.profileDetailsForm.controls[elem].valid;
    }
    this.formProfileDetailsValid = !result;
  }

  saveProfileDetails(): void {
    let userDetailsTemp: UserDetails;
    userDetailsTemp = this.profileDetailsForm.value;
    this.profile.userDetails = userDetailsTemp;
    this.profile.userDetails.socialList = this.socialList;
    this.profile.userDetails.profileImage = this.imagePath;
  }

  printCurrentProfile(): void {
    console.warn(this.profile);

  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
