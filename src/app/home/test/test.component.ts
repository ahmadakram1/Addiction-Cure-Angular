import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DoctorsService } from 'src/app/doctors.service';
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

  next(id:number) {
    if (this.selectedAnswer === "yes") {
      this.score++;
    }
    this.currentQuestionIndex++;
    console.log(this.selectedAnswer);
    this.selectedAnswer = null;
    console.log(this.score);
    console.log(id);
  }



 
  constructor(private spinner: NgxSpinnerService,public doctorService:DoctorsService, private route: Router , public dialog:MatDialog)
  {

  }
  ngOnInit() {
    this.doctorService.GetAllQuastions()
    console.log(this.doctorService.Quastions);
  }

OpenDialog()
{
  this.dialog.open(PaymentTestComponent)
}
}
