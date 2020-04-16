import {Injectable} from '@angular/core';
import {FaqContent} from '../../shared/interfaces/faq-content';

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

  delivery : FaqContent [] =
  [
    {
      title:'What payment methods do you accept?',
      answer:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
    ,
    {
      title:'Do you sell gift cards?',
      answer:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      title:'How do I purchase a gift card?',
      answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  ];



  constructor() { }
  getMainSubjects(): string []{
    return this.mainSubjects;
  }

  getInitialContent(): FaqContent[]{
    return this.paymentFAQ;
  }
  getContentOfSub(sub:string) : FaqContent[]{
    if (sub === this.mainSubjects[0]) {
      return this.delivery
    }
    if (sub === this.mainSubjects[1]) {
      return this.paymentFAQ;
    }
    return [];
  }
}
