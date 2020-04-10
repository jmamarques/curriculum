import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  content = 'Welcome to';
  private default_color = 'white';
  private color = this.default_color;

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

  setDefaultColor(): void{
    this.color = this.default_color;
  }
}
