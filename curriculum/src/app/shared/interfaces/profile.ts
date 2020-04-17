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

}

export interface SocialLinks {
  icon: string;
  url: string;
}

