import { Component, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent {
  @ViewChild("details") Details: any;
  dialog: any;

  constructor(public sharedService: SharedService ,public adminService:AdminService) { }
  
  info = this.sharedService.Category.abouttext
  
  ngOnInit() {
    this.sharedService.GetCategory();
    this.last_index = (this.info.substring(0, 100)).lastIndexOf(' ');
   if(this.last_index > 100)
     this.last_index = 100;
   this.counter = this.last_index;
  }


  async openDetalisDialog(categryid: number) {

    await this.sharedService.GetCategoryById(categryid)
    this.dialog.open(this.Details);
  }

  last_index = 100;
  counter = 100;
  showTxt = "Show More"


 toggleSkil(about:string){
   if(this.counter < 101 )
     {
       this.counter = about.length
       this.showTxt = "Show less";
     }
     else {
       this.counter = this.last_index;

       this.showTxt = "Show More"
     }
 }

firstCount = 100




}
