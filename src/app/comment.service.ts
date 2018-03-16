import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, } from '@angular/common/http';

 // TODO  upgrade this class
@Injectable()
export class CommentService {
  private beginUrl = 'https://webhospitaldb.herokuapp.com/patients/';
  private endUrl = '/comments';
  testData = {
      commentContent: 'Hello World',
      patient: 63
    };
  constructor (private http: HttpClient) {
  }
  // getList(idPatient): Observable<IPatient[]> {
  //   return this.http.get<IPatient[]>(this.beginUrl + idPatient + this.endUrl);
  // }
  getOne(idPatient, id) {
    return this.http.get(this.beginUrl + idPatient + this.endUrl + '/' + id);
  }

  post() {
    console.log(this.testData);
    return this.http.post(this.beginUrl + 1 + this.endUrl, this.testData);
  }
  delete(idPatient, id) {
    return this.http.delete(this.beginUrl + idPatient + this.endUrl + '/' + id);

  }
  put(idPatient, comment) {
    return this.http.put(this.beginUrl + idPatient + this.endUrl, comment);
  }
}
