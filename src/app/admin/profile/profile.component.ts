import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AdminService } from 'src/app/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public sharedservice: SharedService, public adminService: AdminService) { 

   
  }

  UpdateProfile = new FormGroup({

    doctodid: new FormControl(''),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required,Validators.minLength(6)]),
    email: new FormControl("", [Validators.required,Validators.email]),


  })

   async ngOnInit() {


    this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
   await this.adminService.GetDoctorById(this.sharedservice.doctodid)



   this.UpdateProfile.patchValue({
    doctodid : this.adminService.DoctorById.doctodid,
    firstname : this.adminService.DoctorById.firstname,
    lastname:this.adminService.DoctorById.lastname,
    username: this.adminService.DoctorById.username,
    email:this.adminService.DoctorById.email,
    
  })
    
  }

  
  
 UpdateAdmin(){
    this.adminService.UpdateAdminDoctor(this.UpdateProfile.value)
  }


  
  UploadImage(Input:any){

    if (Input.files[0] != 0) {
      let UploadedImage = Input.files[0]; //ImageFile
      let formData = new FormData()   
      formData.append("fileForImage",UploadedImage)
      this.sharedservice.UploadImage(formData)
    }
   
  }


  ReturnOldValue(){
    
   this.UpdateProfile.patchValue({
    doctodid : this.adminService.DoctorById.doctodid,
    firstname : this.adminService.DoctorById.firstname,
    lastname:this.adminService.DoctorById.lastname,
    username: this.adminService.DoctorById.username,
    email:this.adminService.DoctorById.email,
    password : ""
    
  })
  }



  
  B? :boolean;
  ShowBErrorMessage() {
    this.B = true;
  }
  
  C? :boolean;
  ShowCErrorMessage() {
    this.C = true;
  }

}
