import {animate, group, query, state, style, transition, trigger} from '@angular/animations';

// https://angular.io/guide/animations

export const slideInAnimation = trigger('slideInAnimation', [
  // Transition between any two states
  transition('* <=> *', [
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(':enter, :leave', style({position: 'fixed', width: '100%', zIndex: 2}), {optional: true}),
    // group block executes in parallel
    group([
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-out', style({transform: 'translateX(-100%)'}))
      ], {optional: true})
    ])
  ])
]);

export const openCloseAnimation = trigger('openClose', [
  state('true', style({height: '*'})),
  state('false', style({height: '0px'})),
  transition('false <=> true', animate(500))
]);

export const fadeAnimation = trigger('fadeAnimation', [
  // Transition between any two states
  transition('* <=> *', [
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(':enter, :leave', style({position: 'fixed', width: '100%', zIndex: 2}), {optional: true}),
    // group block executes in parallel
    group([
      query(':enter', [
        style({opacity: 1}),
        animate('0.5s ease-out', style({opacity: 0}))
      ], {optional: true}),
      query(':leave', [
        style({opacity: 0}),
        animate('0.5s ease-out', style({opacity: 1}))
      ], {optional: true})
    ])
  ])
]);
