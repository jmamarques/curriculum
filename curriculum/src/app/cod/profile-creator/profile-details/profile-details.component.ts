import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cod-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  public imagePath:any;
  imgURL: any;
  public message: string;
  value: Date;
  constructor() { }

  ngOnInit(): void {
    this.imgURL = '../../../assets/profilepic.png';
  }
  preview(files:any) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
