import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-log-in-account',
  templateUrl: './log-in-account.component.html',
  styleUrls: ['./log-in-account.component.scss']
})
export class LogInAccountComponent implements OnInit {

  selectedValues: string[] = ['val1'];
  checkboxColor: ThemePalette = 'warn';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirect(goal:string): void{
    this.router.navigate(['/account/'+goal]);
  }

}
