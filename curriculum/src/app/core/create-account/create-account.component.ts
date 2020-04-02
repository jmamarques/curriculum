import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import { RouteService } from '../Services/route.service';

@Component({
  selector: 'cod-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  selectedValues: string[] = ['val1'];
  checkboxColor: ThemePalette = 'warn';
  constructor(private routeService:RouteService) { }

  ngOnInit(): void {
  }
  redirect(goal:string): void{
    this.routeService.redirect(goal);
  }

}
