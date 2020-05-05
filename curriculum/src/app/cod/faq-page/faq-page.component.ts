import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaqService} from '../../core/services/faq.service';
import {FaqContent} from '../../shared/interfaces/faq-content';
import {EmitEvent, EventBusService, Events} from '../../core/services/util/event-bus.service';

@Component({
  selector: 'cod-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit, OnDestroy {
  mainSubjects: string[];
  selectedSub: boolean[] = [];
  subjectQuestionsAnswer: FaqContent[];

  constructor(
    private eventBus: EventBusService,
    private faqService: FaqService) {
    this.eventBus.emit(new EmitEvent(Events.Header, {fillColor: '#e0e0e0'}));
  }

  ngOnDestroy(): void {
    this.eventBus.emit(new EmitEvent(Events.Header, {}));
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

