import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { DoctorsService } from 'src/app/doctors.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  data:any;
  constructor(public adminService :AdminService,private http: HttpClient){
 //get request from web api
 this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(data => { this.data = data;

 setTimeout(()=>{   
   $('#datatableexample').DataTable( {
     pagingType: 'full_numbers',
     pageLength: 5,
     processing: true,
     lengthMenu : [5, 10, 25]
 } );
 }, 1);
       }, error => console.error(error));

  }

  ngOnInit()
  {    
    this.adminService.getReport()
   
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  Searchdate()
  {
    this.adminService.Search(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
  }

 
}
