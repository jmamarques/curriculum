import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {RouteService} from '../services/route.service';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'cod-log-in-account',
  templateUrl: './log-in-account.component.html',
  styleUrls: ['./log-in-account.component.scss']
})
export class LogInAccountComponent implements OnInit {

  checkboxColor: ThemePalette = 'warn';

  constructor(private routeService: RouteService,
              private headerService: HeaderService) {
    this.headerService.setContent('Log-In to');
  }

  ngOnInit(): void {
  }

  redirect(goal: string): void {
    this.routeService.redirect(goal);
  }
}
