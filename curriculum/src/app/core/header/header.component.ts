import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {RouteService} from '../services/route.service';
import {EventBusService, Events} from '../services/util/event-bus.service';
import {Subscription} from 'rxjs';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

export interface Header {
  title: string;
  fillColor: string;
  codVisible: boolean;
}

@AutoUnsubscribe()
@Component({
  selector: 'cod-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {
  public static DEFAULT_CONTENT = 'Welcome to';
  public static DEFAULT_COLOR = 'white';
  public static DEFAULT_STATE_COD = true;

  @Input() content = HeaderComponent.DEFAULT_CONTENT;
  @Input() backgroundColor = HeaderComponent.DEFAULT_COLOR;
  @Input() isActiveSidebar: boolean;
  @Input() codVisible = HeaderComponent.DEFAULT_STATE_COD;
  @Output() sideBar: EventEmitter<boolean> = new EventEmitter<boolean>();
  header: Header;
  headerEventBus: Subscription;

  constructor(private routeService: RouteService,
              private eventBusService: EventBusService
  ) {
  }

  ngOnInit(): void {
    this.headerEventBus = this.eventBusService.on(Events.Header, (value: Header) => this.header = value);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  click() {
    this.isActiveSidebar = !this.isActiveSidebar;
    this.sideBar.emit(this.isActiveSidebar);
  }

  redirect(goal: string): void {
    this.routeService.redirect(goal);
  }

  ngOnDestroy(): void {
  }
}
