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
  
  Patient: any 


  GetAllPatient() {
    this.spinner.show()
    this.http.get("https://localhost:44373/api/Patient/getallPatient").subscribe(
      {
        next: (res) => {
          this.Patient = res
          this.spinner.hide()
          
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
  async GetPatientById(patientid: any) {
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44373/api/Patient/getbyid/" + patientid).subscribe(
      {
        next: (res) => {
          this.PatientById = res
          console.log(this.PatientById)
          this.spinner.hide()
          this.toastr.success("Success")
          resolve()
        },

        error: (err) => {
          console.log(err)
          this.spinner.hide()
          this.toastr.error("Error")
        }
      }
    )
    })
}

async DeletePatient(patientid: number)
{
  return new Promise<void>((resolve,reject)=>{
  this.http.delete("https://localhost:44373/api/Patient/deletePatient/"+patientid).subscribe(
    {
      next:()=>{
        this.spinner.hide()
        this.toastr.success("Deleted Successfully")
        resolve()
      },
      error:()=>{
        this.spinner.hide()
        this.toastr.error("Error")
        reject()
      }
    }
  )
})
}


async UpdatePatient(Patient : any)
{
  return new Promise<void>((resolve,reject)=>{
  this.spinner.show()
  this.http.put("https://localhost:44373/api/Patient/updatePatient", Patient).subscribe(
    {
      next:()=>{
        this.spinner.hide()
        this.toastr.success("Updated Successfully")
        resolve()
      },
      error:(err)=>{
        console.log(err);
        this.spinner.hide()
        this.toastr.error("Error")
      }
    }
  )
})
}

QuastionsByCategoryId:any=[]
GetQuastionByCategoryId(quastionID:any)
{
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Quastion/GetQUASTIONBYID/"+quastionID).subscribe(
    {
        next:(res)=>{this.QuastionsByCategoryId=res
        this.spinner.hide()
        this.toastr.success("Success")},
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")}
    }
  )
}

 PaymentTest:any
 async CreatePayment(Pay:any){
  this.PaymentTest.name = this.PatientById.firstname +" "+ this.PatientById.lastname
  this.PaymentTest.email=this.PatientById.login.email
  return new Promise<void>((resolve,reject)=>{
  this.http.post("https://localhost:44373/API/invoicepayment/pay/",Pay).subscribe({
    next:(res:any)=>{
      this.PaymentTest=res
      resolve()
    },
    error:(err)=>{
      console.log(err);
      reject()}
  })
})
}


CreateTest(Test: any) {

  this.spinner.show()
  this.http.post("https://localhost:44373/api/Test", Test).subscribe(
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
