export interface commonValue{
  type: string;
}
export interface AdicionalInfoHobby extends commonValue{
  hobby: string,
  description : string
}

export interface AdicionalInfoProject extends commonValue{
  projectName:string,
  projectType:string,
  projectDescription:string,
  projectScope:string,
  startDate:string,
  endDate:string,
  urlLink:string,
  tecnhologies: string[]
}

export interface AdicionalInfoCertificate extends commonValue{
  title: string,
  entity: string,
  grade: string,
  issueDate: string,
  description: string
  file: File
}

export interface AdicionalInfoInterests extends commonValue{
  interestName : string,
  description : string
}

export interface AdicionalInfoOthers extends commonValue{
  title : string,
  description : string,
  urlLink : string
}
