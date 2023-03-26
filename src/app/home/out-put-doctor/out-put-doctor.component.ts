import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-out-put-doctor',
  templateUrl: './out-put-doctor.component.html',
  styleUrls: ['./out-put-doctor.component.css']
})
export class OutPutDoctorComponent {
 dataDoctor :any;
 ngOnInit() {
localStorage.getItem('img' );
localStorage.getItem('fname' );
localStorage.getItem('lname' );
localStorage.getItem('specialty' );
localStorage.getItem('Description');
const CardData = {
  img: localStorage.getItem('img' ),
  fname: localStorage.getItem('fname' ),
  lname: localStorage.getItem('lname' ),
  specialty: localStorage.getItem('specialty' ),
  Description: localStorage.getItem('Description')
}
this.dataDoctor = CardData;
}
}
  



  

 

  

