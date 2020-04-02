import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../Services/route.service';

@Component({
  selector: 'cod-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isActiveSidebar: boolean;
  @Output() sideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private routeService:RouteService) {
  }

  ngOnInit(): void {
  }

  click() {
    this.isActiveSidebar = !this.isActiveSidebar;
    this.sideBar.emit(this.isActiveSidebar);
  }


  redirect(goal:string): void{
    this.routeService.redirect(goal);
  }

}
