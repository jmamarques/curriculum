import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cod-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isActiveSidebar: boolean;
  @Output() sideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  click() {
    this.isActiveSidebar = !this.isActiveSidebar;
    this.sideBar.emit(this.isActiveSidebar);
  }


  redirect(goal:string): void{
    this.router.navigate(['/account/'+goal]);
  }

}
