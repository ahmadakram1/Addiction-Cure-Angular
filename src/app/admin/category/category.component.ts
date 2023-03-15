import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  
@ViewChild("CreateForm") Craete:any;
@ViewChild("UpdateForm") Update:any;
@ViewChild("DeleteForm") Delete:any;
@ViewChild("DetailsForm") Details:any;


}
