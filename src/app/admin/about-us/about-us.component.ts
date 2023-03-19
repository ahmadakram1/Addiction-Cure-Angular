import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {


  @ViewChild("UpdateForm") Update: any;
  @ViewChild("DeleteForm") Delete: any;
  @ViewChild("DetailsForm") Details: any;


  constructor(public sharedservice: SharedService, public dialog: MatDialog) {

  }

  UpdateAboutUsForm = new FormGroup({

    id: new FormControl(""),
    // image : new FormControl("",Validators.required),
    paragraph1: new FormControl("", Validators.required),
    paragraph2: new FormControl("", Validators.required)

  })


  ngOnInit() {
    this.sharedservice.GetAllAboutUs();
  }


  //Update AboutUS
  async OpenUpdateDialog(id: number) {
    await this.sharedservice.GetAboutusByid(id)
    this.UpdateAboutUsForm.patchValue(this.sharedservice.AboutById)
    this.dialog.open(this.Update)
  }

 async UpdateAboutUs() {
    await this.sharedservice.UpdateAboutUs(this.UpdateAboutUsForm.value)
    this.sharedservice.GetAllAboutUs();
  }


  //Delete AboutUS
  SelectedAbout = 0;
  OpenDeleteDialog(id: number) {
    this.SelectedAbout = id
    this.dialog.open(this.Delete)
  }

  DeleteAbout(){
    this.sharedservice.DeleteAbout(this.SelectedAbout)
    this.sharedservice.GetAllAboutUs()
  }



  //Deatals AboutUS
 async OpenDetailsDialog(id: number) {
  await this.sharedservice.GetAboutusByid(id)
    this.dialog.open(this.Details)
  }

  


}
