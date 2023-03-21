import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public sharedservice : SharedService, public adminService:AdminService){}
  ngOnInit(){
this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
this.adminService.GetDoctorById(this.sharedservice.doctodid)
  }
  
}
