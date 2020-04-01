import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'cod-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  selectedValues: string[] = ['val1'];
  checkboxColor: ThemePalette = 'warn';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(goal:string): void{
    this.router.navigate(['/account/'+goal]);
  }

}
