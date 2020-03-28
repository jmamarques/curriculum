import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cod-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isActiveSidebar: boolean;
  @Output() sideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  click() {
    this.isActiveSidebar = !this.isActiveSidebar;
    this.sideBar.emit(this.isActiveSidebar);
  }

}
