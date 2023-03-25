import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-main-doctor',
  templateUrl: './main-doctor.component.html',
  styleUrls: ['./main-doctor.component.css']
})
export class MainDoctorComponent {
constructor(public adminService:AdminService,public sharedservice:SharedService){

}

async ngOnInit(){

  
  this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
  await this.adminService.GetDoctorById(this.sharedservice.doctodid)

}
}
