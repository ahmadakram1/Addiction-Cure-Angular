import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import {MatDialog, } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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

 
  CreateForm= new FormGroup({

    firstname : new FormControl("",[Validators.required]),
    lastname : new FormControl("",[Validators.required]),
    imagename : new FormControl("",[Validators.required]),
    level1 : new FormControl("",[Validators.required]),
    username : new FormControl("",[Validators.required]),
    email :new FormControl("",[Validators.required])

  })




  ngOnInit()
  {
    this.adminService.GetAllDoctors()
  }

  async openDetalisDialog(Doctor_id:number){
  
   await this.adminService.GetDoctorById(Doctor_id);
    this.dialog.open(this.Details);
  }


}
