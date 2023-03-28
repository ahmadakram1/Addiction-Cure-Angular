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
  
  async ngOnInit() {
   await this.sharedService.GetCategory();
  }


  async openDetalisDialog(categryid: number) {

    await this.sharedService.GetCategoryById(categryid)
    this.dialog.open(this.Details);
  }

}
