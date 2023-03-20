import { Component } from '@angular/core';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
constructor(public patientService:PatientService){}

OnInit(){
  this.patientService.
}
}
