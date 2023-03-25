import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DoctorsService } from 'src/app/doctors.service';

@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.component.html',
  styleUrls: ['./result-test.component.css']
})
export class ResultTestComponent {

  @ViewChild("UpdateForm") update:any;


  UpdateResultTestForm= new FormGroup({

    resulttestid:new FormControl(""),
    description:new FormControl(""),
    perioddate:new FormControl(""),
    numberoftest:new FormControl(""),
    datetest:new FormControl(""),
    patientid:new FormControl(""),
    resulttest:new FormControl(""),

  })
  constructor(public doctorservice:DoctorsService,private dialog:MatDialog){

  }


  ngOnInit(){
    this.doctorservice.GetAllResult()
  }



  async openUpdateDialog(id:number){
   await this.doctorservice.getResultTestById(id)
    this.UpdateResultTestForm.patchValue(this.doctorservice.ResultTestById)
    this.dialog.open(this.update)

  }


  async Update(){
    await this.doctorservice.UpdateResultTest(this.UpdateResultTestForm.value)
    this.doctorservice.GetAllResult()

  }
}
