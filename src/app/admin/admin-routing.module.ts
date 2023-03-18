import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { AllPatientComponent } from './all-patient/all-patient.component';
import { CategoryComponent } from './category/category.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { TestimonilComponent } from './testimonil/testimonil.component';

const routes: Routes = [
  {
    path: "Report",
    component: ReportComponent
  },
  {
    path: "Main",
    component: MainComponent
  },
  {
    path: "Profile",
    component: ProfileComponent
  },
  {
    path: "AllDoctors",
    component: AllDoctorsComponent
  },
  {
    path: "AllPatient",
    component: AllPatientComponent
  },
  {
    path: "Testimonial",
    component: TestimonilComponent
  },
  {
    path: "Category",
    component: CategoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
