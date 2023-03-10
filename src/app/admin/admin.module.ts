import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';


@NgModule({
  declarations: [
    ReportComponent,
    MainComponent,
    ProfileComponent,
    AllDoctorsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
