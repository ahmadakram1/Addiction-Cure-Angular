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
  
  Patient: any = []
  GetAllPatient() {
    this.spinner.show()
    this.http.get("https://localhost:44373/api/Patient/getallPatient").subscribe(
      {
        next: (res) => {
          this.Patient = res
          this.spinner.hide()
          this.toastr.success("Success")
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
          this.toastr.error("Error")
        }
      }
    )
  }



  createpatient(Patient: any) {

    this.spinner.show()
    this.http.post("https://localhost:44373/api/Patient/createPatient", Patient).subscribe(
      {
        next: () => {
          this.spinner.hide();
          this.toastr.success("Added Successfully")
        },
        error: (error) => {
          this.spinner.hide();
          this.toastr.error("Error")
        }
      }
    )
  
  }


  
  PatientById: any
  GetPatientById(PatientId: any) {
    this.spinner.show()
    this.http.get("https://localhost:44373/API/Patient/getallPatient" + PatientId).subscribe(
      {
        next: (res) => {
          this.PatientById = res
          this.spinner.hide()
          this.toastr.success("Success")
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
          this.toastr.error("Error")
        }
      }
    )
  }



}
