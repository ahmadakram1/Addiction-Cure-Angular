import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-payment-test',
  templateUrl: './payment-test.component.html',
  styleUrls: ['./payment-test.component.css']
})
export class PaymentTestComponent {
  constructor(public patientService:PatientService , public sharedService:SharedService){}
  Amount:number=0;
  paymentform=new FormGroup(
    {
      cardnumber:new FormControl('',[Validators.required]),
      dateCard:new FormControl('',[Validators.required]),
      cvcCard:new FormControl('',[Validators.required])
  }
  )
  x = localStorage.getItem("loginid")?.toString()
  async ngOnInit() {
  await  this.sharedService.GetPatientById(this.x)
    let x:number = parseInt(this.sharedService.PatientById.level1)*5
    this.Amount = parseInt(this.sharedService.PatientById.level1)*30
    console.log(this.sharedService.PatientById.level1);
    
   }
    
   payment(){
    
    const yearString = this.paymentform.value.dateCard?.slice(0, 4) ?? '';
    const year = parseInt(yearString);
    const MonthString = this.paymentform.value.dateCard?.slice(5) ?? '';
    const month = parseInt(MonthString);
    let PaymentReq={
      Amount:this.Amount,
      name:this.sharedService.PatientById.firstname +" "+ this.sharedService.PatientById.lastname,
      email: this.sharedService.PatientById.email,
      Currency : 'usd',
      cvc:this.paymentform.value.cvcCard?.toString(),
      cardNumber:this.paymentform.value.cardnumber?.toString(),
      ExpMonth: month,
      ExpYear:year
    }
    
    this.patientService.CreatePayment(PaymentReq)
    let createpay={
      Amount:this.Amount,
      patientid:this.sharedService.PatientById.patientid,
      paydate: new Date(),
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
