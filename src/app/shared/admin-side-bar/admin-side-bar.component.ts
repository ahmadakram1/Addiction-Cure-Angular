import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent {
  constructor(public adminService:AdminService,public sharedservice:SharedService ){

  }

  
  async ngOnInit() {


    this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
   await this.adminService.GetDoctorById(this.sharedservice.doctodid)


}}
