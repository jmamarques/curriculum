import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'cod-profile-creator',
  templateUrl: './profile-creator.component.html',
  styleUrls: ['./profile-creator.component.scss']
})
export class ProfileCreatorComponent implements OnInit {
  progressBarValue: number = 0;
  stepValue: number = 25;
  currentPage: number = 0;
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
    this.progressBarValue = 24;
  }
  increasePercentage(): void {
    if(this.currentPage==2 ||this.currentPage==2.5){
      this.progressBarValue += this.stepValue/2;
      this.currentPage+=0.5;
    }else{

      if (this.currentPage <= 3) {
        this.progressBarValue += this.stepValue;
        this.currentPage++;
      }

    }

  }
  decreasePercentage(): void {
    if(this.currentPage==2.5 || this.currentPage ==3){
      this.progressBarValue -= this.stepValue/2;
      this.currentPage-=0.5;
    }else{
      this.progressBarValue -= this.stepValue;
      this.currentPage--;
    }
  }
}
