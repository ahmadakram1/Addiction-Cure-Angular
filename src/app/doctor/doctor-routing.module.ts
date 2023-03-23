import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';
import { PatientComponent } from './patient/patient.component';
import { Profile3Component } from './profile3/profile3.component';
import { TreatmentRequestComponent } from './treatment-request/treatment-request.component';


const routes: Routes = [
  {
    path: "MainDoctor",
    component: MainDoctorComponent
  },
  {
    path: "Profile3",
    component: Profile3Component
  },
  {
    path: "Patient",
    component: PatientComponent
  },
  {
    path: "TreatmentRequest",
    component: TreatmentRequestComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
