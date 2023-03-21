import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';
import { PaymentTestComponent } from '../payment-test/payment-test.component';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

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
