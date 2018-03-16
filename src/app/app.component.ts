import {Component, OnInit} from '@angular/core';
import {PatientService} from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PatientService]
})
export class AppComponent implements OnInit {

 patients = [];
 patient = {};
 search = '';
 constructor(private patientService: PatientService) {

 }

 ngOnInit() {

   this.patientService.getList().subscribe(data => {
     this.patients = data;
     console.log(data);
   });
 }

}
