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





constructor(public sharedservice :SharedService,public dialog: MatDialog){

}



UpdateAboutUsForm = new FormGroup({

  id : new FormControl(""),
  // image : new FormControl("",Validators.required),
  paragraph1 : new FormControl("",Validators.required),
  paragraph2 : new FormControl("",Validators.required)

})






ngOnInit(){
  this.sharedservice.GetAllAboutUs();
}


//Update AboutUS
OpenUpdateDialog(id:number){
 this.dialog.open(this.Update)
}

UpdateAboutUs(){

}

OpenDeleteDialog(id:number){

}


OpenDetailsDialog(id:number){

}
}
