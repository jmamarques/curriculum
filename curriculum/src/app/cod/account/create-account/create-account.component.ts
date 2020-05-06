import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {RouteService} from '../../../core/services/route.service';
import {EmitEvent, EventBusService, Events} from '../../../core/services/util/event-bus.service';

@Component({
  selector: 'cod-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, OnDestroy {
  selectedValues: string[] = ['val1'];
  checkboxColor: ThemePalette = 'warn';

  constructor(private routeService: RouteService,
              private eventBus: EventBusService) {
    this.eventBus.emit(new EmitEvent(Events.Header, {title: 'Register to'}));
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
