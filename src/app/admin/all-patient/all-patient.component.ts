import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrls: ['./all-patient.component.css']
})
export class AllPatientComponent {

  @ViewChild("CreateForm") Craete:any;
  @ViewChild("UpdateForm") Update:any;
  @ViewChild("DeleteForm") Delete:any;
  @ViewChild("DetailsForm") Details:any;
  
  
  constructor(public patientService:PatientService ,public dialog:MatDialog){

  }

  ngOnInit()
  {
    this.patientService.GetAllPatient()
  }
  async GetById(patientid:number){
    await this.patientService.GetPatientById(patientid)
    this.dialog.open(this.Details)
  }
}
