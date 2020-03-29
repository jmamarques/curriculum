import {Component, Input, OnInit} from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'cod-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isActiveSidebar = true;
  menuItems: Menu = new Menu();

  constructor() {
  }

  ngOnInit(): void {
    this.menuItems.addMenuItem('home', {isCollapsed: true, isAnimated: true});
    // this.menuItems.addMenuItem('about', {isCollapsed: true, isAnimated: true});
    this.menuItems.addMenuItem('pages', {isCollapsed: true, isAnimated: true});
  }

  changeValue(value: boolean) {
    this.isActiveSidebar = value;
  }

  click() {
    this.isActiveSidebar = !this.isActiveSidebar;
  }
}
