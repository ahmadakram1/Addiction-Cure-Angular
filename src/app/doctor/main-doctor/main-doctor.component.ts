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


}
