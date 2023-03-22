import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component {

  constructor(public patientService: PatientService, public sharedservice: SharedService) { }

  UpdateProfile = new FormGroup
    (
      {
        patientid: new FormControl(''),
        firstname: new FormControl("", [Validators.required]),
        lastname: new FormControl("", [Validators.required]),
        username: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        email: new FormControl("", [Validators.required, Validators.email]),
      })


  async ngOnInit() {
    this.sharedservice.getPatientid(localStorage.getItem("loginid")?.toString())
    await this.patientService.GetPatientById(this.sharedservice.patientid)





    this.UpdateProfile.patchValue({
      patientid: this.patientService.PatientById.patientid,
      firstname: this.patientService.PatientById.firstname,
      lastname: this.patientService.PatientById.lastname,
      username: this.patientService.PatientById.username,
      email: this.patientService.PatientById.email,
    })
  }







  UploadImage(Input: any) {

    if (Input.files[0] != 0) {
      let UploadedImage = Input.files[0]; //ImageFile
      let formData = new FormData()
      formData.append("fileForImage", UploadedImage)
      this.sharedservice.UploadImage(formData)
    }

  }


  UpdatePatient() {
    this.patientService.UpdatePatient(this.UpdateProfile.value)
  }



  ReturnOldValue() {

    this.UpdateProfile.patchValue({
      patientid: this.patientService.PatientById.patientid,
      firstname: this.patientService.PatientById.firstname,
      lastname: this.patientService.PatientById.lastname,
      username: this.patientService.PatientById.username,
      email: this.patientService.PatientById.email,
      password: ""

    })
  }



  B?: boolean;
  ShowBErrorMessage() {
    this.B = true;
  }

  C?: boolean;
  ShowCErrorMessage() {
    this.C = true;
  }


}
