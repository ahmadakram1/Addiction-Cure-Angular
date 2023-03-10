import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    DoctorCardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
    
  ],
  exports:[
    HomeHeaderComponent,
    HomeFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    NgxSpinnerModule,
    DoctorCardComponent
  ]
})
export class SharedModule { }
