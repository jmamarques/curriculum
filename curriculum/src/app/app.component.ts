import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'cod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  @HostListener('document:mouseover', ['$event'])
  mouseover($event: any) {
    if ($event.target.matches('button') || $event.target.matches('i') || $event.target.matches('a')) {
      const cursor = document.getElementById('masterCursor');
      if (cursor) {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
      }
    }
  }

  @HostListener('document:mouseout', ['$event'])
  mouseout($event: any) {
    if ($event.target.matches('button') || $event.target.matches('i') || $event.target.matches('a')) {
      const cursor = document.getElementById('masterCursor');
      if (cursor) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
      }
    }
  }

}
