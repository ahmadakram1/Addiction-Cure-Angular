import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';
import { PatientComponent } from './patient/patient.component';
import { Profile3Component } from './profile3/profile3.component';
import { QuestionsDoctorComponent } from './questions-doctor/questions-doctor.component';
import { ResultTestComponent } from './result-test/result-test.component';
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
  {
    path: "QuestionsDoctor",
    component: QuestionsDoctorComponent
  },
  {
    path: "ResultTest",
    component: ResultTestComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
