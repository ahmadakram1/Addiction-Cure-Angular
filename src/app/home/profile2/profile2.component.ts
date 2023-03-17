import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component {

  constructor(public patientService : PatientService){}


  UpdateForm = new FormGroup({
    firstname : new FormControl("",[Validators.required]),
    lastname : new FormControl("",[Validators.required]),
    username : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required,Validators.email]),
      password : new FormControl("",[Validators.required,Validators.minLength(6)]),
  })

}
