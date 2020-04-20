import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSocialNetworksComponent } from '../dialog-social-networks/dialog-social-networks.component';
import { SocialNetwork } from 'src/app/shared/interfaces/social-network';
import { SocialData } from 'src/app/shared/interfaces/social-data';
@Component({
  selector: 'cod-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  //Image Variables
  public imagePath:any;
  imgURL: any;
  public message: string;
  value: Date;
  dropdown: any[] = [
    {code: 'pt', country: 'Portugal'}, {code: 'ang', country: 'Angola'}, {code: 'monc', country: 'Monçabique'},{code: 'it', country: 'Italy'}
  ];
  //Value for Country DropDown
  dropdownValue = 'countryList';
  socialNetWork: SocialData;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.imgURL = '../../../assets/profilepic.png';
  }
  openDialog() {
    const dialog = this.dialog.open(DialogSocialNetworksComponent, {
    });

    dialog.afterClosed().subscribe(result => {
      console.log('Added new Social Network');
      if(result){
        this.socialNetWork = result;
        console.warn(result);
      }
    });
  }

  preview(files:any) {
    if (files.length === 0)
      return;

    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
