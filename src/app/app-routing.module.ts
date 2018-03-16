import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdatePatientComponent} from './update-patient/update-patient.component';
import {CreatePatientComponent} from './create-patient/create-patient.component';
import {PatientComponent} from './patient/patient.component';

const routes: Routes = [
  {path: 'patient/:id', component: PatientComponent},
  {path: 'createpatient', component: CreatePatientComponent},
  {path: 'updatepatient/:id', component: UpdatePatientComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PatientComponent,
  CreatePatientComponent,
  UpdatePatientComponent
]
