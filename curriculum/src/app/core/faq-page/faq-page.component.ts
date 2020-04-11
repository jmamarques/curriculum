import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { FaqService } from '../services/faq.service';
import { FaqContent } from '../interfaces/faq-content';

@Component({
  selector: 'cod-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit,OnDestroy {
  mainSubjects: string[];
  selectedSub: boolean[] = [];
  subjectQuestionsAnswer: FaqContent[];
  constructor(private headerService: HeaderService,
    private faqService: FaqService) {
    this.headerService.setColor('#e0e0e0');
  }
  ngOnDestroy(): void {
    this.headerService.setDefaultColor();
  }

  ngOnInit(): void {
    this.mainSubjects = this.faqService.getMainSubjects();
    this.subjectQuestionsAnswer = this.faqService.getInitialContent();
    this.mainSubjects.forEach(sub => {
      if (this.mainSubjects[0] === sub) {
        this.selectedSub.push(true);
      } else {
        this.selectedSub.push(false);
      }
    });
  }
  selectedMainSub(i: number) {
    for (let index = 0; index < this.selectedSub.length; index++) {
      this.selectedSub[index] = false;
    }
    this.selectedSub[i] = true;
    this.subjectQuestionsAnswer = this.faqService.getContentOfSub(this.mainSubjects[i]);

  }
}

