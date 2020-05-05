import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteService} from '../../core/services/route.service';
import {EmitEvent, EventBusService, Events} from '../../core/services/util/event-bus.service';

@Component({
  selector: 'cod-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private routeService: RouteService,
              private eventBus: EventBusService) {
    this.eventBus.emit(new EmitEvent(Events.Header, {title: 'Contacts'}));
  }

  ngOnInit(): void {
  }

  redirect(goal: string): void {
    this.routeService.redirect(goal);
  }

  ngOnDestroy(): void {
    this.eventBus.emit(new EmitEvent(Events.Header, {}));
  }

}
