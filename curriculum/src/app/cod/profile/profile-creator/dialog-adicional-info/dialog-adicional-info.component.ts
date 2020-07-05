import { Component, OnInit, Inject } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AdicionalInfoHobby, AdicionalInfoProject, AdicionalInfoCertificate, AdicionalInfoInterests, AdicionalInfoOthers } from 'src/app/shared/interfaces/adicional-info-data';
@Component({
  selector: 'cod-dialog-adicional-info',
  templateUrl: './dialog-adicional-info.component.html',
  styleUrls: ['./dialog-adicional-info.component.scss']
})
export class DialogAdicionalInfoComponent implements OnInit {
  typeAdicionalInfo: string;
  matcher = new MyErrorStateMatcher();
  hobbyForm: FormGroup;
  projectForm: FormGroup;
  certificateForm: FormGroup;
  interestForm: FormGroup;
  othersForm: FormGroup;
  projectTypeList = ['Academic', 'Professional', 'Personal'];
  projectType: string;
  bsConfig: Partial<BsDatepickerConfig>;
  bsConfig2: Partial<BsDatepickerConfig>;
  bsConfig3: Partial<BsDatepickerConfig>;
  minMode: BsDatepickerViewMode = 'month';
  toolsList: string[] = [];
  technologies: string[] = ['Java', 'Git', 'C#', 'Python'];
  technologiesUsed: string[] = [];
  autoCompleteControl = new FormControl();
  filteredOptions: Observable<string[]>;
  fileToUpload: any;
  filePath: any;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogAdicionalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.hobbyForm = this.formBuilder.group({
      hobby: ['', Validators.required],
      description: ['']
    });
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectType: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectScope: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      urlLink: ['']
    });

    this.certificateForm = this.formBuilder.group({
      title: ['', Validators.required],
      entity: ['', Validators.required],
      grade: [''],
      issueDate: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.interestForm = this.formBuilder.group({
      interestName: ['', Validators.required],
      description: ['']
    });

    this.othersForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      urlLink: ['']
    });

    this.bsConfig = Object.assign({}, {
      minMode: this.minMode
    });
    this.bsConfig2 = Object.assign({}, {
      minMode: this.minMode
    });
    this.filteredOptions = this.autoCompleteControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  addTechnology(technology: string) {
    if (technology) {
      this.technologiesUsed.push(technology);
    } else {
      if (this.autoCompleteControl.value != '') {
        this.technologiesUsed.push(this.autoCompleteControl.value);
      }
    }
  }

  removeBadge(socialName: string) {
    this.technologiesUsed.splice(this.technologiesUsed.indexOf(socialName), 1)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const technologiesFiltered = this.technologies.filter(technology => technology.toLowerCase().indexOf(filterValue) === 0);
    return technologiesFiltered.length > 0 ? technologiesFiltered : [value];
  }

  submitAdicionalInfo() {
    let dataToSend: any = {};
    if (this.typeAdicionalInfo === "Hobbies") {
      dataToSend = this.hobbyForm.value;
    }
    if (this.typeAdicionalInfo === "Projects") {
      this.projectForm.value.tecnhologies = this.technologiesUsed;
      dataToSend = this.projectForm.value;
    }
    if (this.typeAdicionalInfo === "Certificates") {
      this.certificateForm.value.file = this.filePath;
      dataToSend = this.certificateForm.value
    }
    if (this.typeAdicionalInfo === "Interests") {
      dataToSend = this.interestForm.value;
    }
    if (this.typeAdicionalInfo === "Others") {
      dataToSend = this.othersForm.value;

    }
    dataToSend.type = this.typeAdicionalInfo;
    this.dialogRef.close(dataToSend);
  }
  preview(files: any) {
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    this.filePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.fileToUpload = reader.result;
    };
    console.warn(files);
    console.warn(this.fileToUpload);
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}
