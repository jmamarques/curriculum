import { Component, OnInit } from '@angular/core';
import { RouteService } from '../Services/route.service';

@Component({
  selector: 'cod-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
  }
  redirect(goal: string){
    this.routeService.redirect(goal);

  }

}
