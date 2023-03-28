import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-testimonil',
  templateUrl: './testimonil.component.html',
  styleUrls: ['./testimonil.component.css']
})
export class TestimonilComponent implements OnInit{

 
 
@ViewChild("CreateForm") Craete:any;
@ViewChild("UpdateForm") Update:any;
@ViewChild("DeleteForm") Delete:any;
@ViewChild("DetailsForm") Details:any;

constructor(public sharedService:SharedService){}
selected :any


ngOnInit(){
 
  this.sharedService.GetAllTestemonial()
  this.sharedService.GetDoctorByLogInId(localStorage.getItem("loginid"))

}
getdata()
{
  console.log(this.selected)
}

async publish(id : number){
await  this.sharedService.publish(id)
  this.sharedService.GetAllTestemonial()
 
}


async unpublish(id : number){
 await this.sharedService.unpublish(id)
  this.sharedService.GetAllTestemonial()
 
}
}