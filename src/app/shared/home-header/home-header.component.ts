import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {

  constructor(public shardService: SharedService, public route: Router) {


  }
  pa: any
  ngOnInit() {
    this.pa = localStorage.getItem('patientid')
  }
  logout() {
    localStorage.clear();
    window.location.reload()
  }
}
