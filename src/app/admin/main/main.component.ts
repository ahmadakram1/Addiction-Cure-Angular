import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

// import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(public adminService : AdminService , public patientService :PatientService ,public sharedservice:SharedService) {}

async ngOnInit(){


  
  this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
  await this.adminService.GetDoctorById(this.sharedservice.doctodid)

  this.adminService.GetAllDoctors()
  this.patientService.GetAllPatient()
  this.adminService.GetAllPayment()
  this.sharedservice.getDoctodid(localStorage.getItem("loginid")?.toString())
  
}
// title = 'ng2-charts-demo';

  // public lineChartData: ChartConfiguration<'line'>['data'] = {
  //   labels: [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July'
  //   ],
  //   datasets: [
  //     {
  //       data: [ 65, 59, 80, 81, 56, 55, 40 ],
  //       label: 'Series A',
  //       fill: true,
  //       tension: 0.5,
  //       borderColor: 'black',
  //       backgroundColor: 'rgba(255,0,0,0.3)'
  //     }
  //   ]
  // };
  // public lineChartOptions: ChartOptions<'line'> = {
  //   responsive: false
  // };
  // public lineChartLegend = true;

}
