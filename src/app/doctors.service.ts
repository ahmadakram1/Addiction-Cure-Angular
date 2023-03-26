import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  patchValue(ResultTestById: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

Quastions:any=[]
GetAllQuastions(id:number)
{
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Quastion/GetQuastions/"+id).subscribe(
    {
      next:(res)=>{this.Quastions=res
      this.spinner.hide()
     },
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")}
    }
  )
}




async CreateQuastion(Quastion: any) {
   return new Promise<void>((resolve,reject)=>{
  this.spinner.show()
  this.http.post("https://localhost:44373/api/Quastion", Quastion).subscribe(
    {
      next: () => {
        this.spinner.hide();
        this.toastr.success("Added Successfully")
        resolve()
      },
      error: (error) => {
        this.spinner.hide();
        this.toastr.error("Error")
        reject()
      }
    }
  )
})
}


 questionss : any =[]
 async GetAllQuastionss(){

  return new Promise<void>((resolve,reject)=>{
  this.spinner.show()
  this.http.get("https://localhost:44373/api/Quastion/GetAllQuestionss").subscribe({
    next:(result)=>{
     this.questionss=result;
     this.spinner.hide()
     this.toastr.success("Successfull")
     resolve()

    },
    error:(error)=>{
     console.log(error);
     this.spinner.hide();
     this.toastr.error("Error")
    
     
     reject()
    }
  })
})
 }


 async DeleteQuestion(id:number){
  return new Promise<void>((resolve,reject)=>{
    this.http.delete("https://localhost:44373/api/Quastion/delete/"+id).subscribe({
    next:()=>{
      this.spinner.hide(),
      this.toastr.success("Deleted Successfully")
      resolve()

    },
    error:(error)=>{
      console.log(error);
      this.spinner.hide();
      this.toastr.error("Error")
      reject()
    }
  })
})
 }


AllResult:any=[]
GetAllResult()
{
  this.spinner.show()
  this.http.get("https://localhost:44373/API/ResultTest/GetAllResult").subscribe(
    {
        next:(res)=>{this.AllResult=res
        this.spinner.hide()
        },
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")}
    }
  )
}




ResultTestById:any
async getResultTestById(id:number){
  return new Promise<void>((resolve, reject) =>  {

  this.spinner.show()
  this.http.get("https://localhost:44373/API/ResultTest/byid/"+id).subscribe({
    next:(res)=>{
      this.ResultTestById=res
      this.spinner.hide()
      resolve()
    },
    error:(err)=>{
      console.log(err);
      this.spinner.hide()
      reject()      
    }
  })
})
}


ResultByDocid:any
async getResultByDocid(id:number){
  return new Promise<void>((resolve, reject) =>  {

  this.spinner.show()
  this.http.get("https://localhost:44373/API/ResultTest/Bydocid/"+id).subscribe({
    next:(res)=>{
      this.ResultByDocid=res
      this.spinner.hide()
      resolve()
    },
    error:(err)=>{
      console.log(err);
      this.spinner.hide()
      reject()      
    }
  })
})
}





async UpdateResultTest(ResultTest:any){
  const header = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
  }
  
  const Options ={
    headers: new HttpHeaders(header)
  }
  return new Promise<void>((resolve, reject) =>  {
    this.spinner.show()
    this.http.put("https://localhost:44373/API/ResultTest",ResultTest).subscribe({
      next:()=>{
        this.spinner.hide()
        this.toastr.success("Updated")
        resolve()
      },
      error:(err)=>{
        this.spinner.hide()
        this.toastr.error("Error")
        console.log("jjjjjjjjjjjjjj",err);
        
         reject()
      }

    })

  })
   

}


Search(DateFome:any,Dateto:any)
{
  this.spinner.show()
  this.http.get("https://localhost:44373/api/ResultTest/"+DateFome+"/"+Dateto).subscribe(
    {
        next:(res)=>{this.AllResult=res
        this.spinner.hide()
        this.toastr.success("Success")},
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")}
    }
  )
}


Test:any=[]
GetAllTest()
{
  this.spinner.show()
  this.http.get("https://localhost:44373/api/Test").subscribe(
    {
        next:(res)=>{this.Test=res
        this.spinner.hide()
        },
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")}
    }
  )
}



patientbydoctorid:any=[]
async getpatientbydoctorid(DoctorId:number)
{
  return new Promise<void>((resolve, reject) =>  {
  this.spinner.show()
  this.http.get("https://localhost:44373/api/Patient/getbydoctorid/"+DoctorId).subscribe(
  {
    next:(res :any)=>{
      this.patientbydoctorid = res;
      this.spinner.hide(); 
         resolve()
    },
    error: (error) => {
      this.spinner.hide();
      this.toastr.error("Error")
    }
  }
  )
})
}



}
