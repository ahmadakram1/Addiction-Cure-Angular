import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 
 @Output() sendvalue = new EventEmitter()

  constructor(public shaerdService:SharedService,private spinner: NgxSpinnerService)
  {

  }
  ngOnInit() {
  this.shaerdService.GetAllTestemonial()
  console.log(this.shaerdService.Testemonial);
  
  }
 

  items = [
    {
      img: 'assets/HomeAssets/img/team-2.jpg',
      fname: 'ahmad',
      lname: 'ahmad',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-3.jpg',
      fname: 'sara',
      lname: 'ahmad',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-1.jpg',
      fname: 'yaman',
      lname: 'ahmad',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor ',
    },
  ];


  public data :any;
  
  GetCardData(Card : any){
    console.log('brefor');
    console.log(this.data);
    this.data = Card;
    console.log('after');
    console.log(this.data);
    
    console.log(Card); 
    const CardData = {
      img: Card.img,
      fname: Card.fname,
      lname: Card.lname,
      specialty: Card.specialty,
      Description: Card.Description
    }
    this.sendvalue.emit(CardData)
    localStorage.setItem('img' , this.data.img);
    localStorage.setItem('fname' , this.data.fname);
    localStorage.setItem('lname' , this.data.lname);
    localStorage.setItem('specialty' , this.data.specialty);
    localStorage.setItem('Description' , this.data.Description);

  }
}
