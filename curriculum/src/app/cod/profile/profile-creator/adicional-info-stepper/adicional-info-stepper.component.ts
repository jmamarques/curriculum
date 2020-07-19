import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/shared/interfaces/profile';
import { DialogAdicionalInfoComponent } from '../dialog-adicional-info/dialog-adicional-info.component';
import { MatDialog } from '@angular/material/dialog';
import { AdicionalInfoHobby, AdicionalInfoProject, AdicionalInfoCertificate, AdicionalInfoInterests, AdicionalInfoOthers } from 'src/app/shared/interfaces/adicional-info-data';

@Component({
  selector: 'cod-adicional-info-stepper',
  templateUrl: './adicional-info-stepper.component.html',
  styleUrls: ['./adicional-info-stepper.component.scss']
})
export class AdicionalInfoStepperComponent implements OnInit {
 @Input() profile : Profile;
 DIALOG_WIDTH: string = '450';

   /* **************Adicional Info User Variables**************** */
  /* ************************************************************ */
  /* *********************************************************** */
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAdicionalInfoDialog() {
    const dialog = this.dialog.open(DialogAdicionalInfoComponent, {
      width: this.DIALOG_WIDTH +'px',
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        console.warn(result);
        if (result.type === "Hobbies") {
          this.profile.hobbies ? this.profile.hobbies.push(result) : this.profile.hobbies = [result];
        }
        if (result.type === "Projects") {
          this.profile.projects ? this.profile.projects.push(result) : this.profile.projects = [result];
        }
        if (result.type ==="Certificates") {
          this.profile.certificates ? this.profile.certificates.push(result) : this.profile.certificates = [result];
        }
        if (result.type==="Interests") {
          this.profile.interests ? this.profile.interests.push(result) : this.profile.interests = [result];
        }
        if (result.type ==="Others") {
          this.profile.others ? this.profile.others.push(result) : this.profile.others = [result];
        }
      }
    });
  }

}
