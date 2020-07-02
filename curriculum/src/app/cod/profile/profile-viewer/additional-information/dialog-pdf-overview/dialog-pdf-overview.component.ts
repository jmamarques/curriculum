import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../../../../shared/interfaces/dialog-data';

@Component({
  selector: 'cod-dialog-pdf-overview',
  templateUrl: './dialog-pdf-overview.component.html',
  styleUrls: ['./dialog-pdf-overview.component.scss']
})
export class DialogPdfOverviewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogPdfOverviewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
  }

}
