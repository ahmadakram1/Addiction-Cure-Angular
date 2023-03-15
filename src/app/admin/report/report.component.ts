import { Component } from '@angular/core';
import { DoctorsService } from 'src/app/doctors.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  constructor(public doctoreservice :DoctorsService){

  }
  ngOnInit()
  {
    this.doctoreservice.GetAllResult()
  }
}
