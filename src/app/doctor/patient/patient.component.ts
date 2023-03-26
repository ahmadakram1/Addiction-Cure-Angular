import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';
  
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
constructor(public patientService:PatientService ,public adminservice:AdminService, public doctorService:DoctorsService , public sharedService : SharedService,private route:Router){}
 

async ngOnInit(){
  this.doctorService.getpatientbydoctorid(this.sharedService.DoctorByLoginId.doctodid)
  this.patientService.GetAllPatient()
}
GetById(id:number)
{
  this.patientService.GetPatientBypateinId(id)
}




retrive(id:number , cat:number){
this.sharedService.retrive(id,cat)
this.route.navigate(["Doctor/QuestionsDoctor"])
}
}
