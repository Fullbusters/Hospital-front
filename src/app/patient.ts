export interface IPatient {
  patientId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: string;
  country: string;
  state: string;
  address: string;
}


export class Patient {
  constructor (
    public patientId: number,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public sex: string,
    public country: string,
    public state: string,
    public address: string
  ) { }
}
