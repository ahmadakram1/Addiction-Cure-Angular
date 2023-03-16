import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import {MatDialog, } from '@angular/material/dialog';


@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {

  
@ViewChild("CreateForm") Craete:any;
@ViewChild("UpdateForm") Update:any;
@ViewChild("DeleteForm") Delete:any;
@ViewChild("DetailsForm") Details:any;




  constructor(public adminService : AdminService,public dialog:MatDialog)
  {

  }

  ngOnInit()
  {
    this.adminService.GetAllDoctors()
  }

  async GetById(Doctor_id:number){
  
   await this.adminService.GetDoctorById(Doctor_id);
    this.dialog.open(this.Details);
  }


}
