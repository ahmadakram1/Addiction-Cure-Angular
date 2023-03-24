import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  constructor(public adminService:AdminService ,public patientService :PatientService , public sharedService : SharedService){}
async ngOnInit(){
this.sharedService.getPatientid(localStorage.getItem("loginid")?.toString()) 
let level:String = this.patientService.PatientById.level1
await this.adminService.GetAllDoctorsBylevel(level.toString())
}

name:any = new FormControl('');

SearchDoctor(){
  this.adminService.GetDocByName(this.name.value) 
}

async SelectDoctor(doctorid:number){
this.sharedService.getPatientid(localStorage.getItem("loginid")?.toString())
let req:any ={
  Doctorid:doctorid,
  Patientid:this.patientService.PatientById.Patientid,
  status:0
}
await this.sharedService.createRequest(req)
}
}
