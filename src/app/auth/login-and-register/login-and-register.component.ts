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
  constructor(public sharedService:SharedService,private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  LoginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }



  );
  
  Login()
  {
  this.sharedService.Login(this.LoginForm.value)
    console.log(this.sharedService.Login(this.LoginForm.value));
    
}


RegisterForm = new FormGroup({

  firstname : new FormControl("",[Validators.required]),
  lastname : new FormControl("",[Validators.required]),
  username : new FormControl("",[Validators.required]),
  email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required,Validators.minLength(6)]),
    //file : new FormControl("",[Validators.required])
   
  })
  async Register(){
    console.log(this.RegisterForm.value)
    let data=this.RegisterForm.value
    console.log(data);
    
    
    await this.sharedService.RegisterPatient(data)
        console.log(this.sharedService.imageName);
  }

  UploadImage(input: any) // <input>
{
if(input.files.length !=0 )
{
let uploadedFile = input.files[0] // imagefile 
let formData = new FormData()
formData.append('file' , uploadedFile)
this.sharedService.UploadImage(formData)
}
}
  GetData(){ console.log(this.RegisterForm.value); }
 

 
}
