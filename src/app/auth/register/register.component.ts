import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private toastr: ToastrService,private spinner: NgxSpinnerService)
  {

  }

RegisterForm = new FormGroup({

    FirstName : new FormControl("",[Validators.required]),
    LastName : new FormControl("",[Validators.required]),
    UserName : new FormControl("",[Validators.required]),
    EmailAddress : new FormControl("",[Validators.required,Validators.email]),
    Password : new FormControl("",[Validators.required,Validators.minLength(6)]),
    file : new FormControl("",[Validators.required])
   
  })


  GetData(){


    console.log(this.RegisterForm.value);
    
  }

  showSuccess() {
    this.toastr.success('Register Done', 'Toastr fun!');
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
