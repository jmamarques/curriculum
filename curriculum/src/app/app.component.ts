import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {HeaderService} from './core/services/header.service';

@Component({
  selector: 'cod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('masterCursor') masterCursor: ElementRef;
  top: any;
  left: any;
  expand = false;
  isActiveSidebar = true;

  constructor(public headerService: HeaderService) {
  }

  changeValue(value: boolean) {
    this.isActiveSidebar = value;
  }

  /* ************************************************************************* */
  /* **************************CURSOR***************************************** */

  /* ************************************************************************* */

  @HostListener('window:click', ['$event'])
  onClick() {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }

  @HostListener('window:mousemove', ['$event'])
  onMousemove($event: { clientY: number; clientX: number; }) {
    this.top = ($event.clientY - 10) + 'px';
    this.left = ($event.clientX - 10) + 'px';
  }

  @HostListener('document:mouseover', ['$event'])
  mouseover($event: any) {
    if (this.masterCursor) {
      if ($event.target.matches('iframe')) {
        console.log('i m above map');
        this.masterCursor.nativeElement.style.opacity = 0;
      } else {
        if ($event.target.matches('button')
          || $event.target.matches('i')
          || $event.target.matches('.cod-cursor')
          || $event.target.matches('a')) {
          this.masterCursor.nativeElement.style.width = '30px';
          this.masterCursor.nativeElement.style.height = '30px';
        } else {
          this.masterCursor.nativeElement.style.width = '20px';
          this.masterCursor.nativeElement.style.height = '20px';
        }
      }
    }
  }

  @HostListener('document:mouseout', ['$event'])
  mouseout($event: any) {
    if ($event.target.matches('iframe')) {
      this.masterCursor.nativeElement.style.opacity = 1;
    }
    if ($event.target.matches('button')
      || $event.target.matches('i')
      || $event.target.matches('.cod-cursor')
      || $event.target.matches('a')) {
      if (this.masterCursor) {
        this.masterCursor.nativeElement.width = '20px';
        this.masterCursor.nativeElement.height = '20px';
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  handleResize(): void {
    if (outerWidth < 600) {
      this.isActiveSidebar = false;
    }
  }

  onActivate() {
    window.scroll(0, 0);
  }
}
