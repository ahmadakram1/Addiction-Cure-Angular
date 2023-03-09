import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeHeaderComponent,
    HomeFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    NgxSpinnerModule,
  ]
})
export class SharedModule { }
