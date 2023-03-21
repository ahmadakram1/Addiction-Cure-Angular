import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  constructor(public shaerdService:SharedService){}

  ngOnInit() {
    this.shaerdService.GetAboutusByid(66)
  }
}
