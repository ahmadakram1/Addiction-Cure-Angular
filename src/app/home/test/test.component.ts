import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';
import { PaymentTestComponent } from '../payment-test/payment-test.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
constructor(public sharedService:SharedService,public patientService:PatientService,public doctorService:DoctorsService, private route: Router , public dialog:MatDialog){}

zero = "no"
one = "yes"

  currentQuestionIndex = 0;
  selectedAnswer = 0;
  score=10;

  next(id:number) {
    if (this.selectedAnswer === 1) {
      this.score--;
    }
    this.currentQuestionIndex++;
    let test ={
      status:this.selectedAnswer,
      patientid:this.sharedService.PatientById.patientid,
      quastionid:id,
      testdate: new Date()
    }
   this.patientService.CreateTest(test)
    this.selectedAnswer = 0;
  }


PatinetLevel(){
  this.patientService.UpdateLevel(this.sharedService.PatientById.patientid,this.score.toString())

}

x = localStorage.getItem("loginid")?.toString()
  
  async ngOnInit() {
   await this.patientService.GetQuastionByCategoryId(this.sharedService.PatientById.categoryid)
  }



OpenDialog()
{
  this.dialog.open(PaymentTestComponent)
}




}
