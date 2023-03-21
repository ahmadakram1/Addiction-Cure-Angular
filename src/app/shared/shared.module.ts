import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeHeaderComponent} from './home-header/home-header.component';
import { HomeFooterComponent} from './home-footer/home-footer.component';
import { AdminHeaderComponent} from './admin-header/admin-header.component';
import { AdminFooterComponent} from './admin-footer/admin-footer.component';
import { AdminSideBarComponent} from './admin-side-bar/admin-side-bar.component';
import { RouterModule} from '@angular/router';
import { NgxSpinnerModule} from "ngx-spinner";
import { DoctorCardComponent} from './doctor-card/doctor-card.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DoctorFooterComponent } from './doctor-footer/doctor-footer.component';
import { DoctorHeaderComponent } from './doctor-header/doctor-header.component';
import { DoctorSideBarComponent } from './doctor-side-bar/doctor-side-bar.component';


@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    DoctorCardComponent,
    DoctorFooterComponent,
    DoctorHeaderComponent,
    DoctorSideBarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    // MatCardModule,
    
    
  ],
  exports:[
    HomeHeaderComponent,
    HomeFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    DoctorFooterComponent,
    DoctorHeaderComponent,
    DoctorSideBarComponent,
    NgxSpinnerModule,
    DoctorCardComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MdbCarouselModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    
    
  ]
})
export class SharedModule { }
