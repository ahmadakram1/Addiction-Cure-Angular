import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';
import { Profile3Component } from './profile3/profile3.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    MainDoctorComponent,
    Profile3Component,
    PatientComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
