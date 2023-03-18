import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private route:Router,private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

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
  this.http.get("https://localhost:44373/api/Category/GetCategory").subscribe(
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


async CreateCategoryAC(Category: any) {
  return new Promise<void>((resolve, reject) => {
  this.spinner.show()
  this.http.post("https://localhost:44373/api/Category/Create", Category).subscribe(
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
  )})

}

async UpdateCategory(Category: any) {
   
  return new Promise<void>((resolve, reject) => {

    this.spinner.show();
    this.http.put("https://localhost:44373/api/Category/Update", Category).subscribe({
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


async DeleteCategory(Category_id: number) {

  return new Promise<void>((resolve, reject) => {
    this.spinner.show
    this.http.delete("https://localhost:44373/api/Category/DeleteById/"+Category_id).subscribe({

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


CatById:any
async GetCategoryById(catid:any){
  return new Promise<void>((resolve, reject) => {
  this.spinner.show()
  this.http.get("https://localhost:44373/API/Category/GetById/"+catid).subscribe(
    {
      next:(res)=>{this.CatById=res
      this.spinner.hide()
      this.toastr.success("Success")
      resolve()
    },
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")
      reject()
      }
    }
  )})
}

Testemonial:any=[]
async GetAllTestemonial(){
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.get("https://localhost:44373/API/Testimonials/GetAllTestemonial").subscribe(
        {
          next: (res) => {
            this.Testemonial = res
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
      debugger
    })
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
  Register.doctorid=null
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


Login(user :any) // Diala / 123456
{
const header = {
  'Content-Type' : 'application/json',
  'Accept' : 'application/json'
}
const Options ={
  headers: new HttpHeaders(header)
}
this.spinner.show()
this.http.post("https://localhost:44373/API/Login/login", user , Options).subscribe(
{
  next:(res:any)=>{
  console.log(res); // token
  let data : any = jwt_decode(res)
  console.log(data);
    localStorage.setItem('token' , res)
    localStorage.setItem('user' ,JSON.stringify(data))
    this.spinner.hide()
    if (data.Role == 3)
    {
      this.route.navigate([""])
    }
    else if (data.Role == 2)
    {
    this.route.navigate(["Doctor/Main"])
    }
    else
    {
      this.route.navigate(["Admin/Main"])
    }
    },
    error:(err)=>{
      this.spinner.hide()
      console.log(err);      
      this.toastr.error("Invalid username or password")
    }
  }
)}

}