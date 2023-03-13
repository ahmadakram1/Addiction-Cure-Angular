import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService){ }

Doctors :any =[]
GetAllDoctors(){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Doctor/getalldoctor").subscribe(
    {
      next:(res)=>{this.Doctors=res
      this.spinner.hide()
      this.toastr.success("Success")},
      error:(err)=>{console.log(err)         
        this.spinner.hide()
      this.toastr.error("Error")}
    }
  )
}

DoctorById:any
GetDoctorById(doctorid:any){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Doctor/getbyid/"+doctorid).subscribe(
    {
      next:(res)=>{this.DoctorById=res
      this.spinner.hide()
      this.toastr.success()},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error()}
    }
  )
}

Category:any=[]
GetCategory(){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Category/GetCategory").subscribe(
    {
      next:(res)=>{this.Category=res
      this.spinner.hide()
      this.toastr.success("Success")},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")}
    }
  )
}

CatById:any
GetCategoryById(catid:any){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Category/GetById"+catid).subscribe(
    {
      next:(res)=>{this.CatById=res
      this.spinner.hide()
      this.toastr.success("Success")},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")
      }
    }
  )
}

Patient:any=[]
GetAllPatient(){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Patient/getallPatient").subscribe(
    {
      next:(res)=>{this.Patient=res
      this.spinner.hide()
      this.toastr.success("Success")},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")
      }
    }
  )
}

PatientById:any
GetPatientById(PatientId:any){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Patient/getallPatient"+PatientId).subscribe(
    {
      next:(res)=>{this.PatientById=res
      this.spinner.hide()
      this.toastr.success("Success")},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")
      }
    }
  )
}
}
