import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'cod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculum';
  top:any;
  left:any;
  expand=false;
  @HostListener('document:click', ['$event'])
  onClick($event: any) {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
 }
 @HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number; }) {
    this.top=($event.pageY - 10)+ "px";
    this.left= ($event.pageX - 10)+ "px";
 }
}
