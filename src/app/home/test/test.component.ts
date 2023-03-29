import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';
import { PaymentTestComponent } from '../payment-test/payment-test.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
constructor(public sharedService:SharedService,public patientService:PatientService,public doctorService:DoctorsService, private route: Router , public dialog:MatDialog ){}

@ViewChild("paymentTest") paymentx:any

x:any = localStorage.getItem("loginid")
Amount:number=0;
async ngOnInit() {
  await this.sharedService.GetPatientById(this.x)
  await this.patientService.GetQuastionByCategoryId(this.sharedService.PatientById.categoryid)
  let x:number = parseInt(this.sharedService.PatientById.level1)*5;
  this.Amount = parseInt(this.sharedService.PatientById.level1)*30+50;
  this.Email=this.sharedService.PatientById.email;
 }
zero = "no"
one = "yes"

  currentQuestionIndex = 0;
  selectedAnswer = 0;
  score:any=0;

  next(id:number) {
    if (this.selectedAnswer === 0) {
      this.score++;
    }
    this.currentQuestionIndex++;
    let test ={
      status:this.selectedAnswer,
      patientid:this.sharedService.PatientById.patientid,
      quastionid:id,
      testdate: new Date(),
      testnumber:1
    }
   this.patientService.CreateTest(test)
    this.selectedAnswer = 0;  
  }


PatinetLevel(){
  if(this.score!=0){
  this.patientService.UpdateLevel(this.sharedService.PatientById.patientid,this.score.toString())}
  else{
    this.route.navigate([""])
  }
}


OpenDialog()
{

  if(this.score!=0){
  this.dialog.open(this.paymentx)
  }else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you for taking the exam, but you do not need treatment. We wish you good health',
      showConfirmButton: false,
      timer: 5000
    })
    this.route.navigate([""])
  }
}




//ng templet

Email:string=""
paymentform=new FormGroup(
  {
    cardnumber:new FormControl('',[Validators.required]),
    dateCard:new FormControl('',[Validators.required]),
    cvcCard:new FormControl('',[Validators.required])
}
)


  
 r=false
 payment(){
  
  const yearString = this.paymentform.value.dateCard?.slice(0, 4) ?? '';
  const year = parseInt(yearString);
  const MonthString = this.paymentform.value.dateCard?.slice(5) ?? '';
  const month = parseInt(MonthString);
  let PaymentReq={
    Amount:this.Amount,
    name:this.sharedService.PatientById.firstname +" "+ this.sharedService.PatientById.lastname,
    email: this.Email,
    Currency : 'usd',
    cvc:this.paymentform.value.cvcCard?.toString(),
    cardNumber:this.paymentform.value.cardnumber?.toString(),
    ExpMonth: month,
    ExpYear:year
  }
  
  this.patientService.CreateInvoce(PaymentReq)
  if(this.patientService.PaymentTest!=null){
    this.route.navigate(["/request"])
    this.dialog.closeAll()
    let date = new Date()
  let createpay={
    Amount:this.Amount,
    patientid:this.sharedService.PatientById.patientid,
    paydate: date,
  }
  this.patientService.Createpayment(createpay)
}
else{
Swal.fire({
  position: 'center',
  icon: 'error',
  title: 'The card number is not a valid credit card number!',
  showConfirmButton: false,
  timer: 1500
})
}
  
}


A?: boolean
ShowAError() {
  this.A = true;
}
B?: boolean
ShowBError() {
  this.B = true;
}
C?: boolean
ShowCError() {
  this.C = true;
}
}



