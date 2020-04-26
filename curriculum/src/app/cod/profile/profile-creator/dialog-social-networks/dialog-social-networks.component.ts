import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from 'src/app/shared/interfaces/dialog-data';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SocialNetwork} from 'src/app/shared/interfaces/social-network';
import {SocialNetworksService} from 'src/app/core/services/social-networks.service';
import {SocialData} from 'src/app/shared/interfaces/social-data';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'cod-dialog-social-networks',
  templateUrl: './dialog-social-networks.component.html',
  styleUrls: ['./dialog-social-networks.component.scss']
})
export class DialogSocialNetworksComponent implements OnInit {
  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  submitted: boolean = false;
  dropdownValue:SocialData = {link:'',socialContent:{name:'',urlString:''}};
  socialNetworksList: SocialNetwork []=[];
  dataContent: string;
  constructor(private formBuilder: FormBuilder,private dialogRef:MatDialogRef<DialogSocialNetworksComponent>,private socialNetworksService: SocialNetworksService, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.socialNetworksList = this.socialNetworksService.getSocialNetworks();
    this.registerForm= this.formBuilder.group({
      selectedSocialImage:['',Validators.required],
      socialNetworkLink:['',Validators.required]
    });

  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.dialogRef.close(this.dropdownValue);
}
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid &&  isSubmitted);
  }
}
