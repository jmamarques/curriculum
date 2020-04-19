import { Injectable } from '@angular/core';
import { SocialNetwork } from 'src/app/shared/interfaces/social-network';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {
  socialNetworks: SocialNetwork [] = [
  {name:'facebook', urlString:'../../../assets/social-networks/facebook-logo-transparent.png'},
  {name:'github', urlString:'../../../assets/social-networks/github.png'},
  {name:'reddit', urlString:'../../../assets/social-networks/reddit-logo-transparent.png'},
  {name:'twitter', urlString:'../../../assets/social-networks/twitter-logo-transparent.png'}
  ];

  constructor() { }
  getSocialNetworks() : SocialNetwork []{
    return this.socialNetworks;
  }
}
