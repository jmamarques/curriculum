import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private static DEFAULT_CONTENT = 'Welcome to';
  private static DEFAULT_COLOR = 'white';
  private content = HeaderService.DEFAULT_CONTENT;
  private color = HeaderService.DEFAULT_COLOR;

  getContent(): string {
    return this.content;
  }

  constructor() {
  }

  setContent(contentReceived: string) {
    this.content = contentReceived;
  }

  getColor(): string {
    return this.color;
  }

  setColor(value: string) {
    this.color = value;
  }

  setDefaultColor(): void {
    this.color = HeaderService.DEFAULT_COLOR;
  }

  setDefaultContent() {
    this.content = HeaderService.DEFAULT_CONTENT;
  }
}
