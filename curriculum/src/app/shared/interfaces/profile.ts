import {ExperienceEnum} from '../enums/experience.enum';
import {RoleEnum} from '../enums/role';
import {SkillEnum} from '../enums/skill.enum';
import {InterestEnum} from '../enums/interest.enum';
import { SocialData } from './social-data';

export interface Profile {
  firstName: string; //remove
  lastName : string; //remove
  userDetails: UserDetails;
  // end Personal Profile
  experienceList: Experience[];
  skills: Skill[];
  interests: Interest[];
  projects: Project[];
  hobbies : Hobby [];
  certificates: Certificate [];
  others: Other [];
}

export interface commonValue{
  typeAdicional: string;
}

export interface Other extends commonValue{
  title : string,
  description : string,
  urlLink : string
}

export interface Hobby extends commonValue{
  hobby: string;
  description: string;
}

export interface Certificate extends commonValue{
  title: string;
  entity: string;
  grade: string,
  issueDate: string,
  description: string
  file: File
}

export interface SocialLinks {
  name: string;
  icon: string;
  url: string;
}

export interface Experience {
  type:string;
  title: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  organization: string;
  location: {
    country: string; city: string;
  };
  experience: ExperienceEnum;
  data?: any;
  currentSituation : boolean;
  customRole?: string;
}

export interface Skill {
  percentage: number;
  name: string;
  type: SkillEnum;
}

export interface Interest extends commonValue{
  name: string;
  type: InterestEnum;
  description: string;
}

export interface Project extends commonValue{
  name: string;
  type: string;
  description: string;
  scope : string;
  startDate: string;
  endDate: string;
  urlLink: string;
  tecnhologies: string[]
}

export interface UserDetails{
  firstName: string,
  lastName:string,
  email:string,
  phone:string,
  adress:string,
  birthDate:string,
  country:string,
  description:string,
  socialList :SocialData [],
  profileImage: File
}
