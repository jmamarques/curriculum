import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../../../shared/interfaces/profile';
import {MatDialog} from '@angular/material/dialog';
import {DialogPdfOverviewComponent} from './dialog-pdf-overview/dialog-pdf-overview.component';

@Component({
  selector: 'cod-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {
  @Input() private profile: Profile;
  previewSrc: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  display(preview: HTMLDivElement, file: { mime: string; data: string }) {
    preview.style.width = '100%';
    this.previewSrc = this.base64ToArrayBuffer(file.data);
  }

  base64ToArrayBuffer(base64: string) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  preview(file: { mime: string; data: string }) {
    this.dialog.open(DialogPdfOverviewComponent, {
      maxHeight: '800px',
      data: this.base64ToArrayBuffer(file.data)
    });
  }
}
