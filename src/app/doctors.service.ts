import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

Quastions:any=[]
GetAllQuastions()
{
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Quastion/GetQuastions").subscribe(
    {
      next:(res)=>{this.Quastions=res
      this.spinner.hide()
      this.toastr.success("Success")},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")}
    }
  )
}




CreateQuastion(Quastion: any) {

  this.spinner.show()
  this.http.post("https://localhost:44373/api/Quastion", Quastion).subscribe(
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




QuastionsById:any
GetQuastionById(QuastionId:any)
{
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Quastion/GetQUASTIONBYID/"+QuastionId).subscribe(
    {
        next:(res)=>{this.QuastionsById=res
        this.spinner.hide()
        this.toastr.success("Success")},
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")}
    }
  )
}

AllResult:any=[]
GetAllResult()
{
  this.spinner.show()
  this.http.get("https://localhost:44373/API/ResultTest/GetAllResult").subscribe(
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
