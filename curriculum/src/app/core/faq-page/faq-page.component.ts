import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'cod-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
  mainSubjects : string [];
  constructor(private headerService: HeaderService,
              private faqService : FaqService) {
    this.headerService.setColor('#e0e0e0');
   }

  ngOnInit(): void {
    this.mainSubjects = this.faqService.getMainSubjects();

  }

}
