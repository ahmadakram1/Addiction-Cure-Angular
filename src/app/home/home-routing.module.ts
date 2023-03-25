import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MainComponent } from './main/main.component';
import { OutPutDoctorComponent } from './out-put-doctor/out-put-doctor.component';
import { PaymentTestComponent } from './payment-test/payment-test.component';
import { Profile2Component } from './profile2/profile2.component';
import { RequestComponent } from './request/request.component';
import { TestComponent } from './test/test.component';
import { TestimoialComponent } from './testimoial/testimoial.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "AboutUs",
    component: AboutUsComponent
  },
  {
    path: "ContactUs",
    component: ContactUsComponent
  },
  {
    path: "Testimonial",
    component: TestimoialComponent
  },
  {
    path: "Doctors",
    component: DoctorsComponent
  },
  {
    path: "OutPutDoctor",
    component: OutPutDoctorComponent
  },
  {
    path: "Profile2",
    component: Profile2Component
  },
  {
    path: "Test",
    component: TestComponent
  },
  {
    path: "PaymentTest",
    component: PaymentTestComponent
  },
  {
    path: "request",
    component: RequestComponent
  },
  {
    path: "CategoryHome",
    component: CategoryHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
