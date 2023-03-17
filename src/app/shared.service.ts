import { HttpClient, HttpHeaders } from '@angular/common/http';
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


createhome(Home: any) {

  this.spinner.show()
  this.http.post("https://localhost:44373/api/Home/createHome", Home).subscribe(
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

AboutUs: any = []
GetAllAboutUs() {

  this.spinner.show()
  this.http.get("https://localhost:44373/api/AboutUs/getallAboutUs").subscribe(
    {

      next: (Result) => {
        this.AboutUs = Result;
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



createAboutUs(AboutUs: any) {

  this.spinner.show()
  this.http.post("https://localhost:44373/api/AboutUs/createAboutUs", AboutUs).subscribe(
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


CreateCategoryAC(Category: any) {

  this.spinner.show()
  this.http.post("https://localhost:44373/api/Category/Create", Category).subscribe(
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


CreateTestimonialAC(Testimonial: any) {

  this.spinner.show()
  this.http.post("https://localhost:44373/api/Testimonials/Create", Testimonial).subscribe(
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



async RegisterPatient(Register:any){
  Register.imagename=this.imageName
  Register.roleid=2
  Register.doctorid=62
  Register.categoryid=null
  Register.level1=null
  console.log(Register);
  const header = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
  }
  
  const Options ={
    headers: new HttpHeaders(header)
  }
  return new Promise<void>((resolve, reject) => {

  this.spinner.show()
  this.http.post("https://localhost:44373/API/login/register",Register,Options).subscribe(
    {
      next:()=>{
        this.spinner.hide()
        this.toastr.success("Success")
        resolve();
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

imageName = ""
UploadImage(imageFile : any) 
{
  this.http.post("https://localhost:44373/API/login/uploadImage",imageFile).subscribe(
    {
      next:(res:any)=>{this.imageName = res.imagename},
      error:()=>{}
    }
  )
}
}
  