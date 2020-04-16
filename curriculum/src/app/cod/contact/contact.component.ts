import {Component, OnInit} from '@angular/core';
import {RouteService} from '../../core/services/route.service';
import {HeaderService} from '../../core/services/header.service';

@Component({
  selector: 'cod-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private routeService: RouteService,
              private headerService: HeaderService) {
    this.headerService.setContent('Contacts');
  }

  ngOnInit(): void {
  }

  redirect(goal: string): void {
    this.routeService.redirect(goal);
  }

}
