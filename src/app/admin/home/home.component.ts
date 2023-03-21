import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // @ViewChild("UpdateForm") Update: any;
  // @ViewChild("DetailsForm") Details: any;

  // UpdateHomeForm = new FormGroup({
  //   homeid: new FormControl(""),
  //   // image1: new FormControl("", Validators.required),
  //   // image2: new FormControl("", Validators.required),
  //   // logo: new FormControl("", Validators.required),
  //   paragraph: new FormControl("", Validators.required),
  //   email: new FormControl("", Validators.required),
  //   phone: new FormControl("", Validators.required),
  //   address: new FormControl("", Validators.required),
  //   text1: new FormControl("", Validators.required)


  // })


  constructor(public sharedservice: SharedService, public dialog: MatDialog,public route:Router) {

  }



  ngOnInit() {
    this.sharedservice.GetAllHome();
  }


  OpenUpdatePage() {
    this.route.navigate(["Admin/HomeManagment"])
  }






}
