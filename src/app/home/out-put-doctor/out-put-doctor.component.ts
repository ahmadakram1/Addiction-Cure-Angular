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
localStorage.getItem('name' );
localStorage.getItem('specialty' );
localStorage.getItem('Description');
const CardData = {
  img: localStorage.getItem('img' ),
  name: localStorage.getItem('name' ),
  specialty: localStorage.getItem('specialty' ),
  Description: localStorage.getItem('Description')
}
this.dataDoctor = CardData;
debugger
}
}
  



  

 

  

