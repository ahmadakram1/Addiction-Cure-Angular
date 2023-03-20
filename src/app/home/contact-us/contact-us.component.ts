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

  constructor(private spinner: NgxSpinnerService, public adminservice: AdminService) {

  }




  CreateContactUsForm = new FormGroup({

    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required,Validators.email]),
    subject: new FormControl("", Validators.required),
    mesg: new FormControl("", Validators.required),


  })

  ngOnInit() {
  
  }

  SendContact() {
    this.adminservice.createContactUs(this.CreateContactUsForm.value)
  }




  //Error messages

   A? :boolean;
  ShowAErrorMessage() {
    this.A = true;
  }
  B? :boolean;
  ShowBErrorMessage() {
    this.B = true;
  }
  C? :boolean;
  ShowCErrorMessage() {
    this.C = true;
  }
  D? :boolean;
  ShowDErrorMessage() {
    this.D = true;
  }
  E? :boolean;
  ShowEErrorMessage() {
    this.E = true;
  }



}
