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

  @ViewChild("CreateForm") Create:any;

  CreateQuestionsForm = new FormGroup({

    quastion : new FormControl("",Validators.required),
    categoryid : new FormControl("",Validators.required)


  })
  constructor(private dialog :MatDialog,public adminservice:AdminService ,public doctorservice: DoctorsService,public sharedservice :SharedService,public patienservice:PatientService) {
  }


  async ngOnInit() {
    this.doctorservice.GetAllQuastionss()
    this.sharedservice.GetCategory()


    
  this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
  await this.adminservice.GetDoctorById(this.sharedservice.doctodid)
  }

  

  OpenCreateDialog(){
    this.dialog.open(this.Create)
  }

  async CreateQ(){
   await this.doctorservice.CreateQuastion(this.CreateQuestionsForm.value)
    this.doctorservice.GetAllQuastionss();
  }



  AddQuestiontoTest(QuestionID: number){
    let test ={
      status:0,
      patientid:this.sharedservice.id,
      quastionid:QuestionID,
      testdate: new Date()
    }
    this.patienservice.CreateTest(test);
  }

  
}
