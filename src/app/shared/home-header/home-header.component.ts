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
  x:any = localStorage.getItem("loginid")
  ngOnInit() {
    if(this.x!=null){
      this.shardService.GetPatientById(this.x)
      }else{
        this.shardService.PatientById=null
      }
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['/Auth/SignIn']);
  }
}
