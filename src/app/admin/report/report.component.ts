import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { DoctorsService } from 'src/app/doctors.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  data:any;
  constructor(public adminService :AdminService,private http: HttpClient){

  }
  dtOptions: any = {};
  
 async ngOnInit()
  {    
  await this.adminService.getReport()
   var total = this.adminService.reports.reduce((sum:any,obj:any)=>sum+obj.amount,0)   
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
    
    
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  Searchdate()
  {
  this.adminService.Search(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
  // this.adminService.mam()
  }
 
}
