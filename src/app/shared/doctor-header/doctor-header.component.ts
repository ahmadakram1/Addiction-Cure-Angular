import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorHeaderComponent {
constructor(){}





Logout()
{

  localStorage.removeItem("loginid")
  localStorage.clear();
}

}


