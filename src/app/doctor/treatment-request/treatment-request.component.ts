import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-treatment-request',
  templateUrl: './treatment-request.component.html',
  styleUrls: ['./treatment-request.component.css']
})
export class TreatmentRequestComponent {
constructor(public sharedService : SharedService,public adminservice:AdminService){}

x = localStorage.getItem("loginid")?.toString()
async ngOnInit(){
  this.sharedService.GetDoctorById(this.x)
await  this.sharedService.Getrequst(this.sharedService.doctodid)
console.log(this.sharedService.request);

 
this.sharedService.getDoctodid(localStorage.getItem("loginid")?.toString())
await this.adminservice.GetDoctorById(this.sharedService.doctodid)
}

accept(reqid:number,patid:number,doctodid:number){
let req:any={
  "Reqid":reqid,
  "Status":1
}
let accept:any = {
  Patientid:patid,
  Doctodid:doctodid
}
this.sharedService.Updatereq(req)
this.sharedService.accepted(accept)
this.sharedService.Getrequst(this.sharedService.doctodid)

}

reject(reqid:number){
  let req:any={
    "Reqid":reqid,
    "Status":2
  }
  this.sharedService.Updatereq(req)
  this.sharedService.Getrequst(this.sharedService.doctodid)
  }

}
