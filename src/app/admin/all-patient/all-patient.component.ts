import { Component, ViewChild } from '@angular/core';
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
  
  
  constructor(public patientService:PatientService){

  }

  ngOnInit()
  {
    this.patientService.GetAllPatient()
  }
}
