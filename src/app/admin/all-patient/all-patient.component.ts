import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrls: ['./all-patient.component.css']
})
export class AllPatientComponent {
  constructor(public adminService:AdminService){

  }

  ngOnInit()
  {
    this.adminService.GetAllPatient()
  }
}
