import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DoctorsService } from 'src/app/doctors.service';
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
  constructor(private dialog :MatDialog,public doctorservice: DoctorsService,public sharedservice :SharedService) {
  }


  ngOnInit() {
    this.doctorservice.GetAllQuastionss()
    this.sharedservice.GetCategory()

  }

  

  OpenCreateDialog(){
    this.dialog.open(this.Create)
  }

  async CreateQ(){
   await this.doctorservice.CreateQuastion(this.CreateQuestionsForm.value)
    this.doctorservice.GetAllQuastionss();
  }

}
