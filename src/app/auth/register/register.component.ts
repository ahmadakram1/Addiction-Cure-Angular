import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public shaerdService :SharedService,private toastr: ToastrService,private spinner: NgxSpinnerService)
  {

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
    
    
    await this.shaerdService.RegisterPatient(data)
        console.log(this.shaerdService.imageName);


    
  }

  UploadImage(input: any) // <input>
{
if(input.files.length !=0 )
{
let uploadedFile = input.files[0] // imagefile 
let formData = new FormData()
formData.append('file' , uploadedFile)
this.shaerdService.UploadImage(formData)
}
}
  GetData(){ console.log(this.RegisterForm.value); }
 

 
}
