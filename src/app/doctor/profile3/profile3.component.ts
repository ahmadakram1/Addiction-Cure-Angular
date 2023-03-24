import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-profile3',
  templateUrl: './profile3.component.html',
  styleUrls: ['./profile3.component.css']
})
export class Profile3Component {
  constructor(public sharedservice: SharedService, public adminService: AdminService) { 

      
  }

  UpdateProfile = new FormGroup({
    image : new FormControl(''),
    doctodid: new FormControl(''),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required,Validators.minLength(6)]),
    email: new FormControl("", [Validators.required,Validators.email]),
    categoryid : new FormControl(''),
    loginid : new FormControl(''),
    roleid : new FormControl(''),
    level1 : new FormControl("")

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
    categoryid : this.adminService.DoctorById.categoryid,
    loginid : this.adminService.DoctorById.loginid,
    roleid :this.adminService.DoctorById.roleid,
    image:this.adminService.DoctorById.imagename,
    level1:this.adminService.DoctorById.level1,
  })
    
  }

  
  
 UpdateAdmin(){
    this.adminService.UpdateDoctor(this.UpdateProfile.value)
    this.adminService.GetDoctorById(this.sharedservice.doctodid)
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
    categoryid : this.adminService.DoctorById.categoryid,
    loginid : this.adminService.DoctorById.loginid,
    roleid :this.adminService.DoctorById.roleid,
    image:this.adminService.DoctorById.imagename,
    level1:this.adminService.DoctorById.level1,
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
  