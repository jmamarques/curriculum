import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cod-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  public imagePath: any;
  imgURL: any;
  public message: string;
  value: Date;
  dropdown: any[] = [
    {code: 'ola', label: 'o1'}, {code: 'adeus', label: 'a1'}, {code: 'bemvindo', label: 'b1'}
  ];
  dropdownValue = 'bemvindo';

  constructor() {
  }

  ngOnInit(): void {
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

}
