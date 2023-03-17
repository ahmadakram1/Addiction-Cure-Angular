import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';
import { PaymentTestComponent } from '../payment-test/payment-test.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private spinner: NgxSpinnerService,public pateintService:PatientService, private route: Router , public dialog:MatDialog)
  {

  }
  ngOnInit() {
    this.pateintService.GetQuastionByCategoryId(1)
  }


OpenDialog()
{
  this.dialog.open(PaymentTestComponent)
}
}
