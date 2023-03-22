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
  constructor(public sharedservice: SharedService, public adminService: AdminService,private route :Router) { 

   
  }

  UpdateProfile = new FormGroup({

    doctodid: new FormControl(''),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
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

  
  
 async UpdateAdmin(){
   await this.adminService.UpdateAdminDoctor(this.UpdateProfile.value)
  //  this.route.navigate(["Admin/Profile"])
  }



}
