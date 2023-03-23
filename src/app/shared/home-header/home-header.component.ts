import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {

constructor(public shardService:SharedService,private route:Router){}

logout()
{

  localStorage.removeItem("loginid")
  localStorage.clear()
  this.route.navigate(['Auth/LandR']);
}

}
