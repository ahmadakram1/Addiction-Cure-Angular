import { Component } from '@angular/core';
import { DoctorsService } from 'src/app/doctors.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent {
  constructor(public sharedService:SharedService,public patientService:PatientService,public doctorService:DoctorsService){}
  async ngOnInit() {
    await this.patientService.GetQuastionsByPatId(this.sharedService.PatientById.patientid,this.sharedService.TestNumber)
   
   }
  zero = "no"
  one = "yes"
  
    currentQuestionIndex = 0;
    selectedAnswer = 0;
    score:any=0;
  
    next(id:number) {
      if (this.selectedAnswer === 0) {
        this.score++;
      }
      this.currentQuestionIndex++;
      this.patientService.UpdateStatus(id,this.selectedAnswer)
      this.selectedAnswer = 0;  
    }

    Submit(){
    this.patientService.Afterquiz(this.sharedService.Resultid,this.score.toString())
    }
}
