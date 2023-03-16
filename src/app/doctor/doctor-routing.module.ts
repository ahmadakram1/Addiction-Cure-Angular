import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';
import { Profile3Component } from './profile3/profile3.component';


const routes: Routes = [
  {
    path: "MainDoctor",
    component: MainDoctorComponent
  },
  {
    path: "Profile3",
    component: Profile3Component
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
