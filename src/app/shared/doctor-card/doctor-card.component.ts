import { Component , EventEmitter , Input , Output } from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent {
@Input() img?:string
@Input() fname?:string
@Input() lname?:string
@Input() specialty?:string
@Input() Description?:string

@Output() sendvalue = new EventEmitter()

 


  SendCardData(img?: string, fname?: string,lname?: string, specialty?: string, categoryname?: string) {

    const CardData = {
      img: img,
      fname: fname,
      lname: lname,
      specialty: specialty,
      Description: categoryname
    }

    this.sendvalue.emit(CardData)
  }
 



} 



