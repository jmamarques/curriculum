import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cod-profile-creator',
  templateUrl: './profile-creator.component.html',
  styleUrls: ['./profile-creator.component.scss']
})
export class ProfileCreatorComponent implements OnInit {
  progressBarValue :number = 0;
  stepValue:number= 25;
  currentPage:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.progressBarValue = 24;
  }
  increasePercentage():void{
    this.progressBarValue = this.progressBarValue +this.stepValue;
    this.currentPage++;
  }

  decreasePercentage():void{
    this.progressBarValue -=this.stepValue;
    this.currentPage--;
  }

}
