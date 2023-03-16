import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';

@NgModule({
  declarations: [
    MainDoctorComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule
  ]
})
export class DoctorModule { }
