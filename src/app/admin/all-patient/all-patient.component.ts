import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrls: ['./all-patient.component.css']
})
export class AllPatientComponent {

  @ViewChild("CreateForm") Craete: any;
  @ViewChild("UpdateForm") Update: any;
  @ViewChild("DeleteForm") Delete: any;
  @ViewChild("DetailsForm") Details: any;

  UpdatePatientForm = new FormGroup
  (
    { 
    patientid:new FormControl(''),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    // Imagename: new FormControl("", [Validators.required]),
    level1: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    roleid: new FormControl("", [Validators.required]),
    categoryid: new FormControl("", [Validators.required]),
   })


  constructor(public patientService: PatientService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.patientService.GetAllPatient()
  }
  async GetById(patientid: number) {
    await this.patientService.GetPatientById(patientid)
    this.dialog.open(this.Details)
  }

  selectedItem = 0
  OpenDeleteDialog(patientid: number) {
    this.selectedItem = patientid
    this.dialog.open(this.Delete)
  }

  async DeletePatientbyID() {
    await this.patientService.DeletePatient(this.selectedItem)
    this.patientService.GetAllPatient()
  }

  async OpenUpdateDialog(patientid:number)
  {
    await this.patientService.GetPatientById(patientid)
    this.UpdatePatientForm.patchValue(this.patientService.PatientById)
    this.dialog.open(this.Update)
  }
  
  async UpdatePatient()
  {
   await this.patientService.UpdatePatient(this.UpdatePatientForm.value)
    this.patientService.GetAllPatient()
  }
}
