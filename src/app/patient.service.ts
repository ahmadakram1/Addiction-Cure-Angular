import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { 

  }
  
  Patients:any=[]
  GetAllPatients()
  {
    this.spinner.show()
    this.http.get("https://localhost:44373/api/Patient/getallPatient").subscribe(
      {
        next:(res)=>{this.Patients=res
        this.spinner.hide()
        this.toastr.success("Success")},
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")}
      }
    )
  }

}
