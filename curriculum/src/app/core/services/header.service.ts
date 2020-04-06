import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  content = 'Welcome to';
  private color = 'white';

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
}
