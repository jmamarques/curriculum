import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'cod-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  }

}
