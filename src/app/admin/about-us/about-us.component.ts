import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  constructor(public sharedservice: SharedService, public dialog: MatDialog ,public route:Router) {

  }
  ngOnInit() {
    this.sharedservice.GetAllAboutUs();
  
  }
  OpenUpdatePage() {
    this.route.navigate(["Admin/AboutUsMange"])
  }
}
