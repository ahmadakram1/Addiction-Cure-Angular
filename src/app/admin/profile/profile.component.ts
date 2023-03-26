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
    imagename: new FormControl(''),
    doctodid: new FormControl(''),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    email: new FormControl("", [Validators.required, Validators.email]),


  })
  x: any = localStorage.getItem("loginid")
  async ngOnInit() {
    if (this.x != null) {
      await this.sharedservice.GetDoctorByLogInId(this.x)
    } else {
      this.sharedservice.DoctorByLoginId.doctodid = null
    }

    this.UpdateProfile.patchValue({
      doctodid: this.sharedservice.DoctorByLoginId.doctodid,
      firstname: this.sharedservice.DoctorByLoginId.firstname,
      lastname: this.sharedservice.DoctorByLoginId.lastname,
      username: this.sharedservice.DoctorByLoginId.username,
      email: this.sharedservice.DoctorByLoginId.email,
      imagename: this.sharedservice.DoctorByLoginId.imagename
    })

  }



  async UpdateAdmin() {
    this.adminService.UpdateAdminDoctor(this.UpdateProfile.value)
    this.sharedservice.GetDoctorByLogInId(this.x)
  }



  UploadImage(Input: any) {

    if (Input.files[0] != 0) {
      let UploadedImage = Input.files[0]; //ImageFile
      let formData = new FormData()
      formData.append("fileForImage", UploadedImage)
      this.sharedservice.UploadImage(formData)

    }

  }


  ReturnOldValue() {

    this.UpdateProfile.patchValue({
      doctodid: this.sharedservice.DoctorByLoginId.doctodid,
      firstname: this.sharedservice.DoctorByLoginId.firstname,
      lastname: this.sharedservice.DoctorByLoginId.lastname,
      username: this.sharedservice.DoctorByLoginId.username,
      email: this.sharedservice.DoctorByLoginId.email,
      imagename: this.sharedservice.DoctorByLoginId.imagename,

      password: ""

    })
  }




  B?: boolean;
  ShowBErrorMessage() {
    this.B = true;
  }

  C?: boolean;
  ShowCErrorMessage() {
    this.C = true;
  }

}
