import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
