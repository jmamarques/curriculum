import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogSocialNetworksComponent} from '../dialog-social-networks/dialog-social-networks.component';
import {SocialData} from 'src/app/shared/interfaces/social-data';

@Component({
  selector: 'cod-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  // Image Variables
  imagePath: any;
  imgURL: any;
  message: string;
  // list of users social networks
  socialList: SocialData [] = [];
  dropdown: any[] = [
    {code: 'pt', country: 'Portugal'}, {code: 'ang', country: 'Angola'}, {code: 'monc', country: 'Monçabique'}, {
      code: 'it',
      country: 'Italy'
    }
  ];
  // Value for Country DropDown
  dropdownValue = 'countryList';

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.imgURL = '../../../assets/profilepic.png';
  }

  openDialog() {
    const dialog = this.dialog.open(DialogSocialNetworksComponent, {});

    dialog.afterClosed().subscribe(result => {
      console.warn('Added new Social Network');
      if (result) {
        console.warn(result);
        this.socialList.push(result);
      }
    });
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

  removeBadge(socialName: string) {
    for (let index = 0; index < this.socialList.length; index++) {
      if (this.socialList[index].socialContent.name === socialName) {
        this.socialList.splice(index, 1);
      }
    }

  }

}
