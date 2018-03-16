import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(patients, value) {
    // return patients.filter(patient => {
    //   return patient.firstName.includes(value);
    // });
    console.log(patients);
    console.log(value);
    return patients;
  }
}
