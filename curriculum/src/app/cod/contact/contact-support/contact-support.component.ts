import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactSupportService} from '../../../core/services/contact-support.service';
import {EmitEvent, EventBusService, Events} from '../../../core/services/util/event-bus.service';

@Component({
  selector: 'cod-contact-support',
  templateUrl: './contact-support.component.html',
  styleUrls: ['./contact-support.component.scss']
})
export class ContactSupportComponent implements OnInit, OnDestroy {
  countryList: string [];

  constructor(
    private contactSupportService: ContactSupportService,
    private eventBus: EventBusService
  ) {
    this.eventBus.emit(new EmitEvent(Events.Header, {title: 'Contacts'}));
  }

  ngOnInit(): void {
    this.countryList = this.contactSupportService.getCountryList();
  }

  ngOnDestroy(): void {
    this.eventBus.emit(new EmitEvent(Events.Header, {}));
  }
}
