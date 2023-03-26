import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-questions-doctor',
  templateUrl: './questions-doctor.component.html',
  styleUrls: ['./questions-doctor.component.css']
})
export class QuestionsDoctorComponent {

  @ViewChild("CreateForm") Create: any;

  TestNumber = new FormControl("")



  CreateQuestionsForm = new FormGroup({

    quastion: new FormControl("", Validators.required),
    categoryid: new FormControl("", Validators.required)


  })
  constructor(private dialog: MatDialog, public adminservice: AdminService, public doctorservice: DoctorsService, public sharedservice: SharedService, public patienservice: PatientService) {
  }


  async ngOnInit() {
    await this.doctorservice.GetAllQuastionss()
    this.sharedservice.GetCategory()

  }



  OpenCreateDialog() {
    this.dialog.open(this.Create)
  }

  async CreateQ() {
    await this.doctorservice.CreateQuastion(this.CreateQuestionsForm.value)
    this.doctorservice.GetAllQuastionss();
  }



  AddQuestiontoTest(QuestionID: number) {
    console.log("xxxxxxxxxxxxxxx", this.TestNumber.value);
    
    let test = {
      status: 0,
      patientid: this.sharedservice.id,
      quastionid: QuestionID,
      testdate: new Date(),
      testnumber: this.TestNumber.value
    }
    this.patienservice.CreateTest(test);
  }


  Done(){
   let result = {
    resulttest:"null",
    perioddate:"null",
    description:"null",
    numberoftest:this.TestNumber.value,
    datetest: new Date(),
    patientid:this.sharedservice.id
    }

    this.doctorservice.CreateResult(result)
  }

}
