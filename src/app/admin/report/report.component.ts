import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  Searchdate()
  {
    this.doctoreservice.Search(this.range.value.start,this.range.value.end)
  }
}
