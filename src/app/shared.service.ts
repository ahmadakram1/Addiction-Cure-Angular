import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

Home:any=[]
GetAllHome()
{
  this.spinner.show()
  this.http.get("https://localhost:44373/API/home/getallHome").subscribe(
    {
        next:(res)=>{this.Home=res
        this.spinner.hide()
        this.toastr.success("Success")},
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")}
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
  this.http.get("https://localhost:44373/API/Category/GetById/"+catid).subscribe(
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

Testemonial:any=[]
GetAllTestemonial(){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Testimonials/GetAllTestemonial").subscribe(
    {
      next:(res)=>{this.Testemonial=res
      this.spinner.hide()
      this.toastr.success("Success")},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")
      }
    }
  )
}

Testimonialbyid:any
GetTestimonialByPatienId(TestimonialId:any){
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Testimonials/GetTestimonialByPatienId/"+TestimonialId).subscribe(
    {
      next:(res)=>{this.Testimonialbyid=res
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
