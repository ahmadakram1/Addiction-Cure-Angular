import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 
 @Output() sendvalue = new EventEmitter()

  constructor(private spinner: NgxSpinnerService)
  {

  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
 

  items = [
    {
      img: 'assets/HomeAssets/img/team-2.jpg',
      name: 'ahmad',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-3.jpg',
      name: 'sara',
      specialty: 'bone',
      Description:
        'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor',
    },
    {
      img: 'assets/HomeAssets/img/team-1.jpg',
      name: 'yaman',
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
      name: Card.name,
      specialty: Card.specialty,
      Description: Card.Description
    }
    this.sendvalue.emit(CardData)
    localStorage.setItem('img' , this.data.img);
    localStorage.setItem('name' , this.data.name);
    localStorage.setItem('specialty' , this.data.specialty);
    localStorage.setItem('Description' , this.data.Description);

  }
}
