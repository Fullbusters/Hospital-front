import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PatientService} from '../patient.service';
import {Patient} from '../patient';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss'],
  providers: [PatientService]
})
export class UpdatePatientComponent implements OnInit {

  // newPatient = new Patient(null, '',  '', '', '', '', '', '');
  patient = new Patient(null, '',  '', '', '', '', '', '');
  id;
  constructor(private router: Router, private route: ActivatedRoute,
              private patientService: PatientService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.patientService.getOne(this.id)
        .subscribe(data => this.patient = { ...data} );
    });
  }

  onSubmit() {
    this.patientService.put(this.patient).subscribe();
  }
  put(patient) {
    this.patient = patient;
  }
}
