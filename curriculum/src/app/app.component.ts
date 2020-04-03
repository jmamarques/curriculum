import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'cod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculum';
  top: any;
  left: any;
  expand = false;

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
}
