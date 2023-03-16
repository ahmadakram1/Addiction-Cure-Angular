import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDoctorComponent } from './main-doctor/main-doctor.component';


const routes: Routes = [
  {
    path: "MainDoctor",
    component: MainDoctorComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
