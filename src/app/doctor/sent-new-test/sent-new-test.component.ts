import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

async ngOnInit(){
  this.doctorService.getpatientbydoctorid(this.sharedService.DoctorByLoginId.doctodid)
  this.patientService.GetAllPatient()
}
GetById(id:number)
{
  this.patientService.GetPatientBypateinId(id)
}

async sentnewtestDialog(){
   this.dialog.open(this.sentnewtest)

 }
}
