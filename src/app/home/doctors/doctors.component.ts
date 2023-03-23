import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent {
  constructor(private spinner: NgxSpinnerService,public adminService:AdminService) {}
  ngOnInit() {
    this.adminService.GetAllDoctors();
    // /** spinner starts on init */
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 2000);
  }

  items = [
    {
      img: 'assets/HomeAssets/img/team-2.jpg',
      name: 'ahmad',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-3.jpg',
      name: 'sara',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-1.jpg',
      name: 'yaman',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor ',
    },
    {
      img: 'assets/HomeAssets/img/team-2.jpg',
      name: 'ahmad',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-3.jpg',
      name: 'reem',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-1.jpg',
      name: 'yaman',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor ',
    }
  ];


   

  SearchDoctor(){
 
    
    
  }
}
