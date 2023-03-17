import { Component, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-testimonil',
  templateUrl: './testimonil.component.html',
  styleUrls: ['./testimonil.component.css']
})
export class TestimonilComponent {

 
 
@ViewChild("CreateForm") Craete:any;
@ViewChild("UpdateForm") Update:any;
@ViewChild("DeleteForm") Delete:any;
@ViewChild("DetailsForm") Details:any;

constructor(public sharedService:SharedService){}
selected :any


ngOnInit(){
 
  this.sharedService.GetAllTestemonial()
}
getdata()
{
  console.log(this.selected)
}
}