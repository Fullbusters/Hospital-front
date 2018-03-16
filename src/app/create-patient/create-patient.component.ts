import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';
import {Patient} from '../patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  model = new Patient( null, '', '', '', '', '' , '', '');

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.patientService.post(this.model).subscribe();
  }
  post(patient) {
    this.model = patient;
  }
}
