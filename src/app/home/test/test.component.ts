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
  formatLabel(value: number): string {
    if (value >= 10) {
      return Math.round(value / 10) + '';
    }

    return `${value}`;
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
