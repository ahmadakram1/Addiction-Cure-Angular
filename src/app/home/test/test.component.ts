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
  selectedAnswer = 0;
  score=0;

  next(id:number) {
    if (this.selectedAnswer === 1) {
      this.score++;
    }
    this.currentQuestionIndex++;
    console.log(this.score);
    console.log(typeof(this.selectedAnswer));
    console.log(id);
    
    
    let test ={
      status:this.selectedAnswer,
      patientid:parseInt(this.patientService.PatientById.patientid),
      quastionid:id,
      testdate: new Date()
    }
    
   this.patientService.CreateTest(test)
    
    
    this.selectedAnswer = 0;
    
    
  }

  constructor(public sharedService:SharedService,public patientService:PatientService,public doctorService:DoctorsService, private route: Router , public dialog:MatDialog){}
  async ngOnInit() {
   this.sharedService.getPatientid(localStorage.getItem("loginid")?.toString())
   await this.patientService.GetPatientById(this.sharedService.patientid)
   await this.patientService.GetQuastionByCategoryId(this.patientService.PatientById.categoryid)
  }

OpenDialog()
{
  this.dialog.open(PaymentTestComponent)
}




}
