export class Menu {
  private menuItems: Map<string, Collapse> = new Map();

  constructor() {
  }

  get menu(): Map<string, Collapse> {
    return this.menuItems;
  }

  set menu(value: Map<string, Collapse>) {
    this.menuItems = value;
  }

  addMenuItem(item: string, collapse: Collapse): void {
    this.menuItems.set(item, collapse);
  }

  toggleCollapse(value: string): void {
    const collapse = this.menuItems.get(value);
    if (collapse) {
      collapse.isCollapsed = !collapse.isCollapsed;
    }
  }

  isCollapsed(value: string): boolean {
    const collapse = this.menuItems.get(value);
    return !!collapse && collapse.isCollapsed;
  }

  isAnimated(value: string): boolean {
    const collapse = this.menuItems.get(value);
    return !!collapse && collapse.isAnimated;
  }
}

export interface Collapse {
  isCollapsed: boolean;
  isAnimated: boolean;
}
