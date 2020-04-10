import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'cod-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isActiveSidebar = true;
  menuItems: Menu = new Menu();
  @ViewChild('navElement') navElement: ElementRef;
  hideSideBar = false;

  constructor() {
  }

  ngOnInit(): void {
    this.menuItems.addMenuItem('home', {isCollapsed: true, isAnimated: true});
    // this.menuItems.addMenuItem('about', {isCollapsed: true, isAnimated: true});
    this.menuItems.addMenuItem('pages', {isCollapsed: true, isAnimated: true});
  }

  click() {
    this.isActiveSidebar = !this.isActiveSidebar;
  }
}
