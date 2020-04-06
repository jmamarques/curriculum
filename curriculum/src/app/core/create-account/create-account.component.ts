import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {RouteService} from '../services/route.service';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'cod-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  selectedValues: string[] = ['val1'];
  checkboxColor: ThemePalette = 'warn';

  constructor(private routeService: RouteService,
              private headerservice: HeaderService) {
    this.headerservice.setContent('Register to');
  }

  ngOnInit(): void {
  }

  redirect(goal: string): void {
    this.routeService.redirect(goal);
  }

}
