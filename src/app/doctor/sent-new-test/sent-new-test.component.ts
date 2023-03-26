import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sent-new-test',
  templateUrl: './sent-new-test.component.html',
  styleUrls: ['./sent-new-test.component.css']
})
export class SentNewTestComponent {

  constructor(public patientService:PatientService,private dialog:MatDialog ,public adminservice:AdminService, public doctorService:DoctorsService , public sharedService : SharedService,private route:Router){}
  @ViewChild("NewTest") sentnewtest:any;

  SendEmailForm = new FormGroup({
    BodyEmail: new FormControl("", [Validators.required]),
    DateTest:new FormControl("",[Validators.required])})

  async ngOnInit(){
  this.doctorService.getpatientbydoctorid(this.sharedService.DoctorByLoginId.doctodid)
  this.patientService.GetAllPatient()
}
// async GetById(id:number)
// {
//   await this.patientService.GetPatientBypateinId(id)
//   console.log(this.patientService.PatientBypateinId);
// }

async sentnewtestDialog(id:any){
   this.dialog.open(this.sentnewtest)
   await this.patientService.GetPatientBypateinId(id)
  await console.log(this.patientService.PatientBypateinId);
 }

 close(){
  this.dialog.closeAll()
 }

 SendEmail(){
     this.sharedService.GetDoctorByLogInId(localStorage.getItem("loginid"))
 let EmailBody = {
    PatientName:this.patientService.PatientBypateinId.firstname+" "+this.patientService.PatientBypateinId.lastname,
    DoctorName:this.sharedService.DoctorByLoginId.firstname+" "+this.sharedService.DoctorByLoginId.lastname,
    PatientEmail:this.patientService.PatientBypateinId.email,
    BodyEmail:this.SendEmailForm.controls["BodyEmail"].value,
    DateTest:this.SendEmailForm.controls["DateTest"].value
  }

  console.log(EmailBody);
  
  this.doctorService.SendEmail(EmailBody)
}
}
