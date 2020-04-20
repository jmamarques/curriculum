import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from 'src/app/shared/interfaces/dialog-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialNetwork } from 'src/app/shared/interfaces/social-network';
import { SocialNetworksService } from 'src/app/core/services/social-networks.service';
import { SocialData } from 'src/app/shared/interfaces/social-data';

@Component({
  selector: 'cod-dialog-social-networks',
  templateUrl: './dialog-social-networks.component.html',
  styleUrls: ['./dialog-social-networks.component.scss']
})
export class DialogSocialNetworksComponent implements OnInit {
  dropdownValue:SocialData = {link:'',socialContent:{name:'',urlString:''}};
  socialNetworksList: SocialNetwork []=[];
  dataContent: string;
  constructor(private socialNetworksService: SocialNetworksService, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.socialNetworksList = this.socialNetworksService.getSocialNetworks();
  }

}
