import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  LoginForm = new FormGroup(

    {
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }


  );

  GetData() {

    const User = this.LoginForm.value;

    console.log(User);


  }


  showSuccess() {
    this.toastr.success('Login Done', 'Toastr fun!');
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
