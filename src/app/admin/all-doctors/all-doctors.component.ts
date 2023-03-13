import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  constructor(public adminService : AdminService)
  {

  }

  ngOnInit()
  {
    this.adminService.GetAllDoctors()
  }

}
