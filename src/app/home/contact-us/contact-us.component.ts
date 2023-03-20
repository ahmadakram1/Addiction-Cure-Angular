import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private spinner: NgxSpinnerService,public adminservice:AdminService)
  {

  }



  
  CreateContactUsForm = new FormGroup({

    name: new FormControl("",Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    mesg: new FormControl("", Validators.required),


  })

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

  }
  
  SendContact(){
    this.adminservice.createContactUs(this.CreateContactUsForm.value)
  }




}
