import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private toastr: ToastrService ,private spinner: NgxSpinnerService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
   // this.toastr.error('Hello world!', 'Toastr fun!'); //red error
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
}
