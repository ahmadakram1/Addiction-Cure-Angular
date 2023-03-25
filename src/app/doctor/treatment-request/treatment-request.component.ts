import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-treatment-request',
  templateUrl: './treatment-request.component.html',
  styleUrls: ['./treatment-request.component.css']
})
export class TreatmentRequestComponent {
constructor(public sharedService : SharedService){}

x = localStorage.getItem("loginid")?.toString()
async ngOnInit(){
  this.sharedService.GetDoctorById(this.x)
await  this.sharedService.Getrequst(this.sharedService.doctodid)
console.log(this.sharedService.request);
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
