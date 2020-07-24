import {ExperienceEnum} from '../enums/experience.enum';
import {SkillEnum} from '../enums/skill.enum';
import {InterestEnum} from '../enums/interest.enum';

export interface Profile {
  userDetails: UserDetails;
  // end Personal Profile
  experienceList: Experience[];
  skills: Skill[];
  interests: Interest[];
  projects: Project[];
  hobbies: Hobby [];
  certificates: Certificate [];
  others: Other [];
}

export interface CommonValue {
  typeAdditional: string;
}

export interface Other extends CommonValue {
  title: string;
  description: string;
  urlLink: string;
}

export interface Hobby extends CommonValue {
  hobby: string;
  description: string;
}

export interface Certificate extends CommonValue {
  title: string;
  entity: string;
  grade: string;
  issueDate: string;
  description: string;
  file: File | string; // base64
}

export interface Experience {
  type: string;
  title: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  organization: string;
  location?: {
    country: string; city: string;
  };
  experience: ExperienceEnum;
  data?: any;
  currentSituation: boolean;
  customRole?: string;
}

export interface Skill {
  percentage: number;
  name: string;
  type: SkillEnum;
}

export interface Interest extends CommonValue {
  name: string;
  type: InterestEnum;
  description: string;
}

export interface Project extends CommonValue {
  name: string;
  type: string;
  description: string;
  scope: string;
  startDate: Date;
  endDate: Date;
  urlLink: string;
  technologies: string[];
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  country: string;
  description: string;
  socialList: SocialData [];
  profileImage: File | string;
}

export interface SocialData {
  socialContent: SocialNetwork;
  link: string;
}

export interface SocialNetwork {
  name: string;
  urlString: string;
}
