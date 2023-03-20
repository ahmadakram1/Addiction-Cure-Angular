import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(public adminService : AdminService , public patientService :PatientService) {}

ngOnInit(){
  this.adminService.GetAllDoctors()
  this.patientService.GetAllPatient()
  this.adminService.GetAllPayment()
}
}
