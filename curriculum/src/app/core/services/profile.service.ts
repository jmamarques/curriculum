import {Injectable} from '@angular/core';
import {Profile} from '../../shared/interfaces/profile';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {
  }

  getProfile(id: string | null): Observable<Profile> {
    const profile = {
      profilePic: 'https://media-exp1.licdn.com/dms/image/C5603AQFTsMspZjkfhA/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=AluRZ25lh-twHVLTzDbDL1kX_ihFs2iova9j-wF5ENs',
      curriculum: 'base64forfileNotYetImplemented',
      description: 'After my first degree, I discovered this industry and quickly I realized\n' +
        'how fascinating and challenging it can be. Writing code, building\n' +
        'applications, solving problems/challenges. I\'m always learning and I\n' +
        'really like doing that. Even at home I still enthusiastically learn new\n' +
        'frameworks and other programming languages.\n',
      role: 'Junior Software Developer',
      age: 27,
      phone: '910735900',
      nationality: 'Portugal',
      address: 'Av. da liberdade, Pinhal Novo',
      email: 'jm.a.marques.93@gmail.com',
      firstName: 'João',
      lastName: 'Marques',
      socialLinks: [
        {
          name: 'Linkedin',
          icon: '../../../assets/linkedin.png',
          url: 'https://www.linkedin.com/in/jmamarques/'
        },
        {
          name: 'PluralSight',
          icon: '../../../assets/icon-pluralsight.jpg',
          url: 'https://app.pluralsight.com/profile/jmamarques'
        }
      ]
    };
    return of(profile);
  }
}
