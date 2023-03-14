import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import { PaymentTestComponent } from '../payment-test/payment-test.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private spinner: NgxSpinnerService,public adminService:AdminService, private route: Router , public dialog:MatDialog)
  {

  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }


OpenDialog()
{
  this.dialog.open(PaymentTestComponent)
}
}
