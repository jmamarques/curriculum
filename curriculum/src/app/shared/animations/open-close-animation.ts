import {animate, state, style, transition, trigger} from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
  state('true', style({height: '*'})),
  state('false', style({height: '0px'})),
  transition('false <=> true', animate(500))
]);
