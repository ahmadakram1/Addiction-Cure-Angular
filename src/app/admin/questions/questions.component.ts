import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DoctorsService } from 'src/app/doctors.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  @ViewChild("CreateForm") Create:any;
  @ViewChild("DeleteForm") delete:any;
  @ViewChild("UpdateForm") Update:any;


  constructor(public doctorservice : DoctorsService,private dialog :MatDialog,public sharedservice:SharedService){

  }

  CreateQuestionsForm = new FormGroup({

    quastion : new FormControl("",Validators.required),
    categoryid : new FormControl("",Validators.required)


  })


  ngOnInit(){
    this.doctorservice.GetAllQuastionss();
    this.sharedservice.GetCategory()

  }



  OpenCreateDialog(){
    this.dialog.open(this.Create)
  }

  async CreateQ(){
   await this.doctorservice.CreateQuastion(this.CreateQuestionsForm.value)
    this.doctorservice.GetAllQuastionss();
  }

  OpenUpdateDialog(id:any){

  }




 selectedItem=0
  OpenDeleteDialog(id:number){
    this.dialog.open(this.delete)
    this.selectedItem=id;
  }

  async DeleteQ(){
   await this.doctorservice.DeleteQuestion(this.selectedItem);
   this.doctorservice.GetAllQuastionss();
  }
}
