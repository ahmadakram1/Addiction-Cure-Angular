import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
// GGGGGGG
//JDJDJDJJD
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  Doctors: any = []
  GetAllDoctors() {
    this.spinner.show()
    this.http.get("https://localhost:44373/API/Doctor/getalldoctor").subscribe(
      {
        next: (res) => {
          this.Doctors = res
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
  
  
  async createdoctor(Doctor: any) {

    return new Promise<void>((resolve, reject) => {

    this.spinner.show()
    this.http.post("https://localhost:44373/api/Login/DoctorRegister", Doctor).subscribe(
      {
        next: () => {
          this.spinner.hide();
          this.toastr.success("Added Successfully");
          resolve();
        },
        error: (error) => {
          this.spinner.hide();
          this.toastr.error("Error")
         reject();
        }
      }
    )
   })
  }


  async UpdateDoctor(Doctor: any) {
   
    return new Promise<void>((resolve, reject) => {

      this.spinner.show();
      this.http.put("https://localhost:44373/API/Doctor/updatedoctor", Doctor).subscribe({
        next: () => {
          this.spinner.hide();
          this.toastr.success("Updated Successfully");
          resolve();

        },
        error: () => {
          this.spinner.hide();
          this.toastr.error("Error")
          reject();
        }

      })
    })
  }
  

  async Deletedoctor(Doctor_id: number) {

    return new Promise<void>((resolve, reject) => {
      this.spinner.show
      this.http.delete("https://localhost:44373/api/Doctor/deletedoctor/"+Doctor_id).subscribe({

        next: () => {
          this.spinner.hide()
          this.toastr.success("Deleted Successfully")
          resolve()
        },
        error: () => {
          this.spinner.hide()
          this.toastr.error("Error")
          reject()

        }

      }
      )
    })
  }





  DoctorById: any
   async GetDoctorById(doctorid: any) {
    return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44373/API/Doctor/getbyid/" + doctorid).subscribe(
      {
        next: (res) => {          
          this.DoctorById = res
          this.spinner.hide()          
          this.toastr.success()
         resolve()
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
          this.toastr.error()
           reject()
        }
      }
    )
    })
  }




  ContactUs: any = []
  getallContactUs() {
    this.spinner.show()
    this.http.get("https://localhost:44373/API/ContactUs/getallContactUs").subscribe(
      {
        next: (res) => {
          this.ContactUs = res
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



  createContactUs(ContactUs: any) {

    this.spinner.show()
    this.http.post("https://localhost:44373/api/ContactUs/createContactUs", ContactUs).subscribe(
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



  Payments: any = []
  GetAllPayment() {

    this.spinner.show()
    this.http.get("https://localhost:44373/api/Payment").subscribe(
      {

        next: (Result) => {
          this.Payments = Result;
          this.spinner.hide()
        },
        error: (Error) => {
          console.log(Error);
          this.spinner.hide();
          this.toastr.error("Error")

        }

      }
    )
  }





  CreatePayment(Payment: any) {

    this.spinner.show()
    this.http.post("https://localhost:44373/api/ContactUs/createContactUs", Payment).subscribe(
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










}
