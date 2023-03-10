import { Component , EventEmitter , Input , Output } from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent {
@Input() img?:string
@Input() name?:string
@Input() specialty?:string
@Input() Description?:string

@Output() sendvalue = new EventEmitter()
SendData(img?:string,name?:string,specialty?:string,Description?:string){
 const items={
img:img,
name:name,
specialty:specialty,
Description:Description
}
  this.sendvalue.emit(items)
}
}



