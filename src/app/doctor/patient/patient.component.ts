import { Component } from '@angular/core';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
constructor(public patientService:PatientService , public doctorService:DoctorsService){}

OnInit(){
  this.doctorService.getpatientbydoctorid(21)
  console.log(this.doctorService.patientbydoctorid);
  
}
GetById(id:number)
{
  this.patientService.PatientById(id)
}
}
