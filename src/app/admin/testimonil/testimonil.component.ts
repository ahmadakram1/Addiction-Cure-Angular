import { Component, ViewChild } from '@angular/core';

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


}
