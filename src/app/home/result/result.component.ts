import { Component } from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
constructor(public patientService:PatientService , public sharedService:SharedService){}

async ngOnInit(){
 await this.patientService.getResultByPatid(this.sharedService.PatientById.patientid)
}

numberOfTest(numberoftest:number ,Resulttestid:number){
this.sharedService.SetTestNumber(numberoftest ,Resulttestid)
}
}
