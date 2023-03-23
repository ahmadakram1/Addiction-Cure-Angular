import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-testimoial',
  templateUrl: './testimoial.component.html',
  styleUrls: ['./testimoial.component.css']
})
export class TestimoialComponent {
  constructor(private spinner: NgxSpinnerService, public patientService: PatientService, public sharedservice: SharedService) {

  }
  async ngOnInit() {
    this.sharedservice.getPatientid(localStorage.getItem("loginid")?.toString())
    await this.patientService.GetPatientById(this.sharedservice.patientid)
  }
  Testemonials = new FormGroup
    ({
        messageuser: new FormControl("", [Validators.required]),
      })

  SendTestemonial() {
    this.sharedservice.CreateTestimonialAC(this.Testemonials.value)
  }
}
