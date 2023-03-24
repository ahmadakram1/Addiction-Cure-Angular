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

id = 21
 ngOnInit(){
  this.doctorService.getpatientbydoctorid(this.id)
  console.log(this.doctorService.patientbydoctorid);
  this.patientService.GetAllPatient()
  
}
GetById(id:number)
{
  this.patientService.PatientById(id)
}
}
