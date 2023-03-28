import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  constructor(public adminService:AdminService ,public patientService :PatientService , public sharedService : SharedService,private route :Router){}
async ngOnInit(){
  
let level:String = this.sharedService.PatientById.level1
await this.adminService.GetAllDoctorsBylevel(level.toString())
}

name:any = new FormControl('');

SearchDoctor(){
  this.adminService.GetDocByName(this.name.value) 
}

async SelectDoctor(doctorid:number){
let req:any ={
  Doctorid:doctorid,
  Patientid:this.sharedService.PatientById.patientid,
  status:0
}
await this.sharedService.createRequest(req)


this.route.navigate(["/"])
}
}
