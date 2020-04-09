import { Injectable } from '@angular/core';

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
  paymentFAQ =
  [
    [
      'What payment methods do you accept?',
      'We accept Master Card, Visa, Or Paypal. If you have any other ways we will not accpet due to customer security protection '
    ],
    [
      'Do you sell gift cards?',
      "We do sell gift cards. They are 20$ each. So if you are looking a present for your lovely one you don't need to look any further"
    ],
    [
      'How do I purchase a gift card?',
      'There are two ways of buying a gift card.First one is online. The second one is on our stores.'
    ]
  ];

  

  constructor() { }
  getMainSubjects(): string []{
    return this.mainSubjects;
  }
}
