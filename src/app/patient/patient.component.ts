import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PatientService} from '../patient.service';
import {CommentService} from '../comment.service';
import { Patient} from '../patient';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  providers: [PatientService, CommentService]
})


export class PatientComponent implements OnInit {
  patient = new Patient(null, '',  '', '', '', '', '', '');
  comment = {};
  id;
  constructor(
    private router: Router, private route: ActivatedRoute,
    private patientService: PatientService, private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.patientService.getOne(this.id)
        .subscribe(data => this.patient = { ...data} );
    });
  }
  // TODO Add all comment for patients add two way binding
  delete () {
    this.patientService.delete(this.id).subscribe();
  }
}
