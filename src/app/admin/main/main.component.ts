import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';
import { Chart, registerables } from 'chart.js';
import { DoctorsService } from 'src/app/doctors.service';
Chart.register(...registerables);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(public doctorservice :DoctorsService,public adminService : AdminService , public patientService :PatientService ,public sharedservice:SharedService) {}

async ngOnInit(){

  this.adminService.GetAllDoctors()
  this.patientService.GetAllPatient()
  this.adminService.GetAllPayment()
  this.doctorservice.GetAllQuastionss()
  this.sharedservice.GetCategory()
  
  this.sharedservice.GetAllTestemonial()


  var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ['Patients', 'Doctors', 'Payments', 'Questions', 'Categories', 'Testimonials'],
        datasets: [{
            label: 'Statistics',
            data: [this.patientService.Patient.length,this.adminService.Doctors.length, this.adminService.Payments.length, this.doctorservice.questionss.length, this.sharedservice.Category.length, this.sharedservice.Testemonial.length],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}


}

