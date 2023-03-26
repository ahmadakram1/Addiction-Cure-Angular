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


async ngOnInit(){
await  this.sharedService.Getrequst(this.sharedService.DoctorByLoginId.doctodid)
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
this.sharedService.Getrequst(this.sharedService.DoctorByLoginId.doctodid)

}

reject(reqid:number){
  let req:any={
    "Reqid":reqid,
    "Status":2
  }
  this.sharedService.Updatereq(req)
  this.sharedService.Getrequst(this.sharedService.DoctorByLoginId.doctodid)
  }

}
