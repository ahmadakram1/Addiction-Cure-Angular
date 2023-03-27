import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { SharedService } from './shared.service';
// GGGGGGG
//JDJDJDJJD
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService , public sharedservice : SharedService) { }

  Doctors: any = []
  GetAllDoctors() {
    return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44373/API/Doctor/getalldoctor").subscribe(
      {
        next: (res:any) => {
          this.Doctors = res.filter((x:any)=>x.doctodid!=21)
          this.spinner.hide()
          resolve()
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
          this.toastr.error("Error")
        }
      }
    )})
  }



  DoctorsLevel: any = []
  GetAllDoctorsBylevel(level:string) {
    return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44373/API/Doctor/getalldoctor").subscribe(
      {
        next: (res:any) => {
          this.DoctorsLevel = res.filter((d:any) => d.level1 == level)
          this.spinner.hide()
          resolve()
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
          this.toastr.error("Error")
        }
      }
    )})
  }
  
  
GetDocByName(name :string){

  this.spinner.show()
  this.http.get("https://localhost:44373/API/Doctor/SearchByName/"+name).subscribe({

  next:(result)=>{

    this.Doctors=result
    this.spinner.hide(); 
    this.toastr.success(" search done")


  },
  error : (error)=>{
    console.log(error);
    this.spinner.hide(); 
    this.toastr.error("error")

  }
  })
}
  
  async createdoctor(Doctor: any) {

    Doctor.imagename=this.sharedservice.imageName;
   Doctor.Roleid = 2
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
    Doctor.roleid=2
    Doctor.imagename=this.sharedservice.imageName;
    
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

  
  async UpdateAdminDoctor(Doctor: any) {
     Doctor.imagename=this.sharedservice.imageName;
    Doctor.categoryid = 4;
    Doctor.loginid = 101;
    Doctor.roleid = 1;

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





  DoctorBydocId: any
   async GetDoctorBydocId(doctorid: any) {
    return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44373/api/Doctor/getbyid/" + doctorid).subscribe(
      {
        next: (res) => {          
          this.DoctorBydocId = res
         
          
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
          this.toastr.success("Sent Successfully")
        },
        error: (error) => {
          this.spinner.hide();
          this.toastr.error("Error")
        }
      }
    )
  
  }

  DeleteContactUs(Contact_id: number) {

    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44373/api/ContactUs/deleteContactUs/" + Contact_id).subscribe({
        next: () => {
          this.spinner.hide()
          this.toastr.success("Deleted Successfully")
          resolve();
        },
        error: () => {
          this.spinner.hide()
          this.toastr.error("Error")
          reject();
        }
      }
      )
    })
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


  Search(DateFome:any,Dateto:any)
  {
    
    this.spinner.show()
    this.http.get("https://localhost:44373/api/ResultTest/"+DateFome+"/"+Dateto).subscribe(
      {
          next:(res)=>{this.reports=res
          this.spinner.hide()
          this.toastr.success("Success")
          this.total = this.reports.reduce((sum:any,obj:any)=>sum+obj.amount,0)
        },
          error:(err)=>{console.log(err)
          this.spinner.hide()
          this.toastr.error("Error")}
      }
    )
  }


total:any
reports:any=[]
getReport(){
  
  console.log(this.total);
  
  this.http.get("https://localhost:44373/api/payment/Report").subscribe({
    next:(res)=>{      
      this.reports=res
      this.spinner.hide()
      this.toastr.success("Success")
      this.total = this.reports.reduce((sum:any,obj:any)=>sum+obj.amount,0)
    },
    error:(err)=>{console.log(err)
      this.spinner.hide()
      this.toastr.error("Error")}
  })
}





}
