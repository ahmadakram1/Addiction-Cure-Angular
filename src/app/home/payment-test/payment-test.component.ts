import { Component } from '@angular/core';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-payment-test',
  templateUrl: './payment-test.component.html',
  styleUrls: ['./payment-test.component.css']
})
export class PaymentTestComponent {
  constructor(public patientService:PatientService){}
  ReqPay={
    
  }

  payment(){
    this.patientService.CreatePayment(this.ReqPay)
  }
}
