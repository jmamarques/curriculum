import {ExperienceEnum} from '../enums/experience.enum';
import {RoleEnum} from '../enums/role';

export interface Profile {
  // Personal Profile
  profilePic: string;
  curriculum: string;
  description: string;
  role: string;
  age: number;
  phone: string;
  nationality: string;
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  socialLinks: SocialLinks[];
  // end Personal Profile
  experiences: Experience[];
}

export interface SocialLinks {
  name: string;
  icon: string;
  url: string;
}

export interface Experience {
  title: string;
  beginDate: Date;
  endDate: Date | null;
  description: string;
  organization: string;
  location: {
    country: string; city: string;
  };
  experience: ExperienceEnum;
  role: RoleEnum;
  data?: any;
}
