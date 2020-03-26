import { Injectable } from '@angular/core';
import {User} from './user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currrentUsers: User [] =
  [
    {id:1023456,
    first_name:"Francisco",
    last_name:"Grilo",
    data_nascimento:"1998/02/23",
    phone_number:935774709,
    description:"O meu percurso tem sido feito de desafios e muita aprendizagem. Já participei em vários projetos académicos e não académicos com o intuito de aumentar o meu conhecimento sobre novas Linguagens e Frameworks. Sou uma pessoa curiosa e sempre disponível para incorporar novas equipas, criar aplicações, resolver problemas e escrever código.",
    current_Function:'Student'},
    {id:99099009,
      first_name:"João",
      last_name:"Marques",
      data_nascimento:"1993/01/24",
      phone_number:910735900,
      description:"After my first degree, I discovered this industry and quickly I realized how fascinating and challenging it can be. Writing code, building applications, solving problems/challenges. I'm always learning and I really like doing that. Even at home I still enthusiastically learn new frameworks and other programming languages.",
      current_Function:'Developer'}
  ];
  constructor() { }

  getUsers() : User[]{
    return this.currrentUsers;
  }
}
