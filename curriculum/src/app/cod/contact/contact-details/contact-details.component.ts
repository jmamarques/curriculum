import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmitEvent, EventBusService, Events} from '../../../core/services/util/event-bus.service';

@Component({
  selector: 'cod-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(private eventBus: EventBusService) {
    this.eventBus.emit(new EmitEvent(Events.Header, {title: 'Contacts'}));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.eventBus.emit(new EmitEvent(Events.Header, {}));
  }

}
