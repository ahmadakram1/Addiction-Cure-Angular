import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})
export class LoginAndRegisterComponent {

  constructor(public shaerdService: SharedService, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  LoginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  RegisterForm = new FormGroup({

    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),

  })

  Login() {
    this.shaerdService.Login(this.LoginForm.value)

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

  D?: boolean
  ShowDError() {
    this.D = true;
  }

  E?: boolean
  ShowEError() {
    this.E = true;
  }
  H?: boolean
  ShowHError() {
    this.H = true;
  }
  F?: boolean
  ShowFError() {
    this.F = true;
  }


  async Register() {
    console.log(this.RegisterForm.value)
    let data = this.RegisterForm.value
    console.log(data);
    await this.shaerdService.RegisterPatient(data)
    console.log(this.shaerdService.imageName);
  }

  UploadImage(input: any) // <input>
  {
    if (input.files.length != 0) {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.shaerdService.UploadImage(formData)
    }
  }
  GetData() { console.log(this.RegisterForm.value); }
}
