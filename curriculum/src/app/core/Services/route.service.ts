import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router:Router) { }

  redirect(goal:string): void{
    this.router.navigate(['/account/'+goal]);
  }
}
