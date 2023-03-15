import { Component } from '@angular/core';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrls: ['./all-patient.component.css']
})
export class AllPatientComponent {
  constructor(public patientService:PatientService){

  }

  ngOnInit()
  {
    this.patientService.GetAllPatient()
  }
}
