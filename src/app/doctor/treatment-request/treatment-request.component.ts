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

accept(reqid:number){
let req:any={
  "Reqid":reqid,
  "Status":1
}
this.sharedService.Updatereq(req)
}

reject(reqid:number){
  let req:any={
    "Reqid":reqid,
    "Status":2
  }
  this.sharedService.Updatereq(req)
  }
}
