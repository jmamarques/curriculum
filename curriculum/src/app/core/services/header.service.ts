import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private static DEFAULT_CONTENT = 'Welcome to';
  private static DEFAULT_COLOR = 'white';
  private static DEFAULT_STATE_COD = true;
  private content = HeaderService.DEFAULT_CONTENT;
  private color = HeaderService.DEFAULT_COLOR;
  private codVisible = HeaderService.DEFAULT_STATE_COD;

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

  getCodVisible(): boolean {
    return this.codVisible;
  }

  setCodVisible(value: boolean) {
    this.codVisible = value;
  }


  setDefaultColor(): void {
    this.color = HeaderService.DEFAULT_COLOR;
  }

  setDefaultContent() {
    this.content = HeaderService.DEFAULT_CONTENT;
  }

  setDefaultCodVisible() {
    this.codVisible = HeaderService.DEFAULT_STATE_COD;
  }

  restoreAll() {
    this.setDefaultColor();
    this.setDefaultContent();
    this.setDefaultCodVisible();
  }
}
