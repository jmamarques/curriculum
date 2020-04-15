import {Component, OnInit} from '@angular/core';
import {ContactSupportService} from '../../../core/services/contact-support.service';

@Component({
  selector: 'cod-contact-support',
  templateUrl: './contact-support.component.html',
  styleUrls: ['./contact-support.component.scss']
})
export class ContactSupportComponent implements OnInit {
  countryList: string [];

  constructor(private contactSupportService: ContactSupportService) {
  }

  ngOnInit(): void {
    this.countryList= this.contactSupportService.getCountryList();
  }

}
