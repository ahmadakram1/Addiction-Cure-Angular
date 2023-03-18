import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

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

 


constructor(public sharedservice:SharedService,public dialog: MatDialog){

}

CreateCategoryForm = new FormGroup({
   
  // image : new FormControl("",[Validators.required]),
  categoryname : new FormControl("",[Validators.required]),
  abouttext : new FormControl("",[Validators.required]),


})

UpdateCategoryForm = new FormGroup({
   
  // image : new FormControl("",[Validators.required]),
  categoryname : new FormControl("",[Validators.required]),
  abouttext : new FormControl("",[Validators.required]),


})

ngOnInit(){
  this.sharedservice.GetCategory();
}



// Create Category

OpenCreateDialog(){
this.dialog.open(this.Craete)
}

async CreateCategory(){
 await this.sharedservice.CreateCategoryAC(this.CreateCategoryForm.value);
  this.sharedservice.GetCategory();
}


// Update Category


OpenUpdateDialog(cat_id :number){
  this.sharedservice.GetCategoryById(cat_id)
  this.dialog.open(this.Update)
  }



}