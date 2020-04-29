import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../../core/services/header.service';

@Component({
  selector: 'cod-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setContent('Contact');
  }

  ngOnInit(): void {
  }


}
