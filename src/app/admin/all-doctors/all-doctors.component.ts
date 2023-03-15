import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';

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




  constructor(public adminService : AdminService)
  {

  }

  ngOnInit()
  {
    this.adminService.GetAllDoctors()
  }

}
