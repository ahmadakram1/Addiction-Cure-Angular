import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import { MatDialog, } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {


  @ViewChild("CreateForm") Create: any;
  @ViewChild("UpdateForm") Update: any;
  @ViewChild("DeleteForm") Delete: any;
  @ViewChild("DetailsForm") Details: any;




  constructor(public adminService: AdminService, public dialog: MatDialog,public sharedservice:SharedService) {

  }


  CreateDoctorForm = new FormGroup({

    Firstname: new FormControl("", [Validators.required]),
    Lastname: new FormControl("", [Validators.required]),
    // Imagename: new FormControl("", [Validators.required]),
    Level1: new FormControl("", [Validators.required]),
    Username: new FormControl("", [Validators.required]),
    Password: new FormControl("", [Validators.required]),
    Email: new FormControl("", [Validators.required]),
    Roleid: new FormControl("", [Validators.required]),
    CATEGORYID: new FormControl("", [Validators.required]),


  })

  
  UpdateDoctorForm = new FormGroup({

    doctodid:new FormControl(''),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    // Imagename: new FormControl("", [Validators.required]),
    level1: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    roleid: new FormControl("", [Validators.required]),
    categoryID: new FormControl("", [Validators.required]),


  })




  ngOnInit() {
    this.adminService.GetAllDoctors()
  }

  async openDetalisDialog(Doctor_id: number) {

    await this.adminService.GetDoctorById(Doctor_id);
    this.dialog.open(this.Details);
  }

  OpenCreateDialog() {

    this.dialog.open(this.Create)
  }

 async CreateDoctor() {

   await this.adminService.createdoctor(this.CreateDoctorForm.value);
    this.adminService.GetAllDoctors();
  }

  async OpenUpdateDialog(doctorId:number){
    await this.adminService.GetDoctorById(doctorId)
    this.UpdateDoctorForm.patchValue(this.adminService.DoctorById)    
    this.dialog.open(this.Update)
  }
 async UpdateDoctor() {

  await this.adminService.UpdateDoctor(this.UpdateDoctorForm.value);
   this.adminService.GetAllDoctors();
 }



















}
