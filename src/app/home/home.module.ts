import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { TestimoialComponent } from './testimoial/testimoial.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { OutPutDoctorComponent } from './out-put-doctor/out-put-doctor.component';
import { Profile2Component } from './profile2/profile2.component';



@NgModule({
  declarations: [
    MainComponent,
    ContactUsComponent,
    AboutUsComponent,
    TestimoialComponent,
    DoctorsComponent,
    OutPutDoctorComponent,
    Profile2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
