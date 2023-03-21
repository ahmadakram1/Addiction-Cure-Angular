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

Home:any={}
async GetAllHome()
{
  return new Promise<void>((resolve, reject) => {

  this.spinner.show()
  this.http.get("https://localhost:44373/api/home/getallHome").subscribe(
    {
        next:(res)=>{this.Home=res
        this.spinner.hide()
        resolve()
        },
        error:(err)=>{console.log(err)
        this.spinner.hide()
        this.toastr.error("Error")
      reject()}
    }
  )
  })
}


async UpdateHome(Home: any) {
  Home.image1 = this.HomeImage
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.put("https://localhost:44373/API/home/updateHome", Home).subscribe(
      {
        next: () => {
          this.spinner.hide();
          this.toastr.success("Updated Successfully")
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


HomeImage = ""
UploadHomeImage(ImageFile: any) {
  this.http.post("https://localhost:44373/API/home/uploadImage", ImageFile).subscribe({

    next: (res: any) => {
      this.HomeImage = res.image1
    },
    error: () => {}
  })
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

HomeById:any
getHomeById(id:number){
  this.spinner.show()
  this.http.get("https://localhost:44373/api/Home/GetHomeById/"+id).subscribe({
    next:(res)=>{
      this.HomeById=res
      this.spinner.hide()
    },
    error:(err)=>{
      console.log(err);
      this.spinner.hide()      
    }
  })
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

AboutById:any
async GetAboutusByid(aboutid:any){
  return new Promise<void>((resolve, reject) => {
  this.spinner.show()
  this.http.get("https://localhost:44373/api/AboutUs/getAboutUsById/"+aboutid).subscribe(
    {
      next:(res)=>{this.AboutById=res
      this.spinner.hide()
      
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


AboutUsImage = ""
UploadAboutUsImage(ImageFile: any) {
  this.http.post("https://localhost:44373/api/AboutUs/uploadImage", ImageFile).subscribe({

    next: (res: any) => {
      this.AboutUsImage = res.image
    },
    error: () => {}
  })
}

  async UpdateAboutUs(AboutUs: any) {
    AboutUs.image = this.AboutUsImage
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44373/api/AboutUs/updateAboutUs", AboutUs).subscribe(
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


async DeleteAbout(About_id: number) {

  return new Promise<void>((resolve, reject) => {
    this.spinner.show
    this.http.delete("https://localhost:44373/api/AboutUs/deleteAboutUs/"+About_id).subscribe({

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


Category:any=[]
GetCategory(){
  this.spinner.show()
  this.http.get("https://localhost:44373/api/Category/GetCategory").subscribe(
    {
      next:(res)=>{this.Category=res
      this.spinner.hide()
      },
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")}
    }
  )
}


async CreateCategoryAC(Category: any) {
  Category.image = this.CategoryImage;
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

  CategoryImage = ""
  UploadCatgoryImage(ImageFile: any) {
    this.http.post("https://localhost:44373/api/Category/uploadImage", ImageFile).subscribe({

      next: (res: any) => {
        this.CategoryImage = res.image
      },
      error: () => {}
    })
  }

async UpdateCategory(Category: any) {
   Category.image = this.CategoryImage
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


publish(TestimonialId:any){
 
  this.http.get("https://localhost:44373/API/Testimonials/publish/"+TestimonialId).subscribe(
    {
      next:()=>{
      this.toastr.success("Published")},
      error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")
      }
    }
  )
}



unpublish(TestimonialId:any){
 
  this.http.get("https://localhost:44373/API/Testimonials/unpublish/"+TestimonialId).subscribe(
    {
      next:()=>{
      this.toastr.success("unPublished")},
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


Login(user :any) 
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
    localStorage.setItem("loginid",data.loginid)
    var loginid = localStorage.getItem("loginid")?.toString()

    this.spinner.hide()
    if (data.Role == 3)
    {
      this.getPatientid(loginid)      
      this.route.navigate([""])
    }
    else if (data.Role == 2)
    {
      this.getDoctodid(loginid)
      this.route.navigate(["Doctor/Main"])
    }
    else
    {
      this.getDoctodid(loginid)
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

patientid:any
getPatientid(loginid?:string){
  this.http.get("https://localhost:44373/API/Login/patientid/"+loginid).subscribe(
    {
      next:(res:any)=>{
        this.patientid=res.patientid
        console.log(this.patientid);
        
      },
      error:(err)=>{console.log(err)
      this.toastr.error("Error")
      }
    }
  )
}


doctodid:any
getDoctodid(loginid?:string){
  this.http.get("https://localhost:44373/API/Login/doctodid/"+loginid).subscribe(
    {
      next:(res:any)=>{
        this.doctodid=res   
        console.log(this.doctodid);

           
      },
      error:(err)=>{console.log(err)
      this.toastr.error("Error")

      }
    }
  )
}

}