import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  content:string = 'Welcome to';
  getContent(): string {
    return this.content;
  }
  setContent(contentReceived: string){
    this.content = contentReceived;
  }

  constructor() { }
}
