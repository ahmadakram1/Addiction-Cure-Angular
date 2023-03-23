import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(public adminService : AdminService , public patientService :PatientService ,public sharedservice:SharedService) {}

async ngOnInit(){


  
  this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
  await this.adminService.GetDoctorById(this.sharedservice.doctodid)

  this.adminService.GetAllDoctors()
  this.patientService.GetAllPatient()
  this.adminService.GetAllPayment()
  this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
  
}
}
