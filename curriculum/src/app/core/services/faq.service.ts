import { Injectable } from '@angular/core';
import { FaqContent } from '../interfaces/faq-content';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  mainSubjects =
  [
    'DELIVERY',
    'ORDERS',
    'REFUNDS',
    'PRODUCT & STOCK',
    'ACCOUNT'
  ];
  paymentFAQ : FaqContent [] =
  [
    {
      title:'What payment methods do you accept?',
      answer:'We accept Master Card, Visa, Or Paypal. If you have any other ways we will not accpet due to customer security protection '
    }
    ,
    {
      title:'Do you sell gift cards?',
      answer:"We do sell gift cards. They are 20$ each. So if you are looking a present for your lovely one you don't need to look any further"
    },
    {
      title:'How do I purchase a gift card?',
      answer: 'There are two ways of buying a gift card.First one is online. The second one is on our stores.'
    }
  ];



  constructor() { }
  getMainSubjects(): string []{
    return this.mainSubjects;
  }

  getContent(): FaqContent[]{
    return this.paymentFAQ;

  }
}
