import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-li-patient',
  templateUrl: './li-patient.component.html',
  styleUrls: ['./li-patient.component.scss'],
})
export class LiPatientComponent implements OnInit {

  @Input()
  patient;

  constructor() { }

  ngOnInit() {
  }
}
