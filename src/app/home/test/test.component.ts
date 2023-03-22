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
zero = "no"
one = "yes"

  currentQuestionIndex = 0;
  selectedAnswer = null;
  score=0;
Test:any
  next(id:number) {
    if (this.selectedAnswer === "yes") {
      this.score++;
    }
    this.currentQuestionIndex++;
    console.log(this.selectedAnswer);
    this.Test.status=this.selectedAnswer
    this.Test.quastionid = id
    this.Test.testdate = Date.now()
    this.Test.patientid = this.sharedService.patientid
    this.patientService.CreateTest(this.Test)
    this.selectedAnswer = null;
    console.log(this.score);
    console.log(id);
  }

  constructor(public sharedService:SharedService,public patientService:PatientService,public doctorService:DoctorsService, private route: Router , public dialog:MatDialog){}
  async ngOnInit() {
    var loginid = localStorage.getItem("loginid")?.toString()
    this.sharedService.getPatientid(loginid)
    await this.patientService.GetPatientById(this.sharedService.patientid)        
   this.doctorService.GetAllQuastions(this.patientService.PatientById.Categoryid)
    console.log(this.patientService.PatientById.Categoryid);
    
    console.log(this.doctorService.Quastions);
  }

OpenDialog()
{
  this.dialog.open(PaymentTestComponent)
}
}
