import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {RouteService} from '../../../core/services/route.service';
import {EmitEvent, EventBusService, Events} from '../../../core/services/util/event-bus.service';

@Component({
  selector: 'cod-log-in-account',
  templateUrl: './log-in-account.component.html',
  styleUrls: ['./log-in-account.component.scss']
})
export class LogInAccountComponent implements OnInit, OnDestroy {

  checkboxColor: ThemePalette = 'warn';

  constructor(private routeService: RouteService,
              private eventBus: EventBusService) {
    this.eventBus.emit(new EmitEvent(Events.Header, {title: 'Log-In to'}));
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
