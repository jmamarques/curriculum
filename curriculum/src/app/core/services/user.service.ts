import {Injectable} from '@angular/core';
import {User} from '../../user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User [] =
    [
      {
        id: 1023456,
        first_name: 'Francisco',
        last_name: 'Grilo',
        data_nascimento: '1998/02/23',
        phone_number: 935774709,
        description: 'O meu percurso tem sido feito de desafios e muita aprendizagem. Já participei em vários projetos académicos e não académicos com o intuito de aumentar o meu conhecimento sobre novas Linguagens e Frameworks. Sou uma pessoa curiosa e sempre disponível para incorporar novas equipas, criar aplicações, resolver problemas e escrever código.',
        current_Function: 'Student',
        icon_profile: 'http://getdrawings.com/free-icon/icone-people-66.png',
        profile_pic: 'https://media-exp1.licdn.com/dms/image/C4D03AQGX56APJUfdfg/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=9LmP9Ef_EM94hd0dpTT7vjobUmMh7sDqy_RiZMc6ft8',
        catchPhrase: 'I think you should check my profile. Give it a try'
      },
      {
        id: 99099009,
        first_name: 'João',
        last_name: 'Marques',
        data_nascimento: '1993/01/24',
        phone_number: 910735900,
        description: 'After my first degree, I discovered this industry and quickly I realized how fascinating and challenging it can be. Writing code, building applications, solving problems/challenges. I\'m always learning and I really like doing that. Even at home I still enthusiastically learn new frameworks and other programming languages.',
        current_Function: 'Developer',
        icon_profile: 'http://getdrawings.com/free-icon/icone-people-66.png',
        profile_pic: 'https://media-exp1.licdn.com/dms/image/C5603AQFTsMspZjkfhA/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=AluRZ25lh-twHVLTzDbDL1kX_ihFs2iova9j-wF5ENs',
        catchPhrase: 'Hello, I\'m João. Learn More about me'
      },

      {
        id: 1,
        first_name: 'Albino',
        last_name: 'Cristovao',
        data_nascimento: '1980/01/24',
        phone_number: 90236981,
        description: 'I like cake',
        current_Function: 'Git Master',
        icon_profile: 'http://getdrawings.com/free-icon/icone-people-66.png',
        profile_pic: 'https://cdn.sabado.pt/images/2017-11/img_1200x1200$2017_11_25_16_05_55_268874.jpg',
        catchPhrase: 'I\'m the Ferrero man '
      },

      {
        id: 0,
        first_name: 'Add New User',
        last_name: '',
        data_nascimento: '',
        phone_number: 0,
        description: '',
        current_Function: 'Join Us!',
        icon_profile: '../../../assets/add.png',
        profile_pic: '../../../assets/plus_icon.png',
        catchPhrase: 'Create your profile. It\'s free'
      }]
  ;

  constructor() {
  }

  getUsers(): User[] {
    return this.users;
  }

  // TODO DUMMY - complete with real data
  getUserStatics(): Observable<any> {
    return of(
      [{make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}]);
  }
}
