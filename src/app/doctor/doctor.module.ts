import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';
import { Profile3Component } from './profile3/profile3.component';
import { PatientComponent } from './patient/patient.component';
import { TreatmentRequestComponent } from './treatment-request/treatment-request.component';
import { QuestionsDoctorComponent } from './questions-doctor/questions-doctor.component';
import { ResultTestComponent } from './result-test/result-test.component';
import { SentNewTestComponent } from './sent-new-test/sent-new-test.component';

@NgModule({
  declarations: [
    MainDoctorComponent,
    Profile3Component,
    PatientComponent,
    TreatmentRequestComponent,
    QuestionsDoctorComponent,
    ResultTestComponent,
    SentNewTestComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
