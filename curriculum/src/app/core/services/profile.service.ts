import {Injectable} from '@angular/core';
import {Profile} from '../../shared/interfaces/profile';
import {Observable, of} from 'rxjs';
import {ExperienceEnum} from '../../shared/enums/experience.enum';
import {RoleEnum} from '../../shared/enums/role';
import {SkillEnum} from '../../shared/enums/skill.enum';

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
      ],
      experiences: [
        {
          title: 'Junior Software Developer',
          beginDate: new Date('01/08/2018'),
          endDate: null,
          description: 'I have been working in BNP Paribas since 2018 as Developer.',
          organization: 'BNP Paribas Securities Services',
          location: {country: 'PT', city: 'LIS'},
          experience: ExperienceEnum.JOB,
          role: RoleEnum.FULL
        },
        {
          title: 'Licenciado in Informatics Engineering',
          beginDate: new Date('09/01/2018'),
          endDate: new Date('06/26/2019'),
          description: 'It was a great experience in which I learned the bases for Informatics Engineering.' +
            'I finished the degree with the final mark of sixteen (16/20) and the qualification of Very Good.',
          organization: 'Faculdade de Ciências da Universidade de Lisboa',
          location: {country: 'PT', city: 'LIS'},
          experience: ExperienceEnum.EDUCATION,
          role: RoleEnum.STUDENT
        }
      ],
      skills: [
        {
          rating: 65,
          name: 'HTML & CSS',
          type: SkillEnum.TECHNICAL
        },
        {
          rating: 80,
          name: 'Java',
          type: SkillEnum.TECHNICAL
        },
        {
          rating: 60,
          name: 'TypeScript',
          type: SkillEnum.TECHNICAL
        },
        {
          rating: 60,
          name: 'JavaScript',
          type: SkillEnum.TECHNICAL
        },
        {
          rating: 40,
          name: 'English',
          type: SkillEnum.LANGUAGE
        },
        {
          rating: 70,
          name: 'Portuguese',
          type: SkillEnum.LANGUAGE
        },
        {
          rating: 80,
          name: 'Teamwork',
          type: SkillEnum.SOFT
        },
        {
          rating: 65,
          name: 'Methodical',
          type: SkillEnum.SOFT
        }
      ]
    };
    return of(profile);
  }
}
