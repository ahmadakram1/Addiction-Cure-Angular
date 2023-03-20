import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild("UpdateForm") Update: any;
  @ViewChild("DetailsForm") Details: any;



  constructor(public sharedservice: SharedService, public dialog: MatDialog) {

  }



  ngOnInit() {
    this.sharedservice.GetAllHome();
  }


  OpenUpdateDialog(id: number) {
    this.dialog.open(this.Update)
  }





  OpenDetailsDialog(id: number) {
    this.dialog.open(this.Details)

  }

}
