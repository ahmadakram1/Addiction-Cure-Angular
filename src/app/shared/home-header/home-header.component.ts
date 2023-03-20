import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {

constructor(public shardService:SharedService){}
logout()
{
  
  localStorage.clear()
}
}
