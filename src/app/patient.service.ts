import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, } from '@angular/common/http';
import {IPatient, Patient} from './patient';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PatientService {
  private url = 'https://webhospitaldb.herokuapp.com/patients';

  // patient = new Patient(null, '',  '', '', '', '', '', '');
  constructor (private http: HttpClient) {
  }
  getList(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(this.url);
  }
  getOne(id) {
    return this.http.get<IPatient>(this.url + '/' + id);
  }

  post(model) {
     return this.http.post(this.url,  model);
}
  delete(id) {
    return this.http.delete(this.url + '/' + id);

  }
  put(patient) {
    return this.http.put(this.url, patient);
  }
}
