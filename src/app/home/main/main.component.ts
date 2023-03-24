import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { PatientService } from 'src/app/patient.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 
 @Output() sendvalue = new EventEmitter()

  constructor(public sharedService:SharedService,public adminservice: AdminService,private spinner: NgxSpinnerService ,private toster:ToastrService,public patientService : PatientService)
  {

  }
  x:any = localStorage.getItem("loginid")

 async ngOnInit() {
  this.sharedService.GetAboutusByid(66)
  await this.sharedService.GetAllTestemonial()
  console.log(this.sharedService.Testemonial);
  console.log(this.x);
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

  CreateContactUsForm = new FormGroup({

    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required,Validators.email]),
    subject: new FormControl("", Validators.required),
    mesg: new FormControl("", Validators.required),


  })

  SendContact() {
    this.adminservice.createContactUs(this.CreateContactUsForm.value)
  }




  //Error messages
   A? :boolean;
  ShowAErrorMessage() {
    this.A = true;
  }
  B? :boolean;
  ShowBErrorMessage() {
    this.B = true;
  }
  C? :boolean;
  ShowCErrorMessage() {
    this.C = true;
  }
  D? :boolean;
  ShowDErrorMessage() {
    this.D = true;
  }
  E? :boolean;
  ShowEErrorMessage() {
    this.E = true;
  }
 

  Wtostar(){
    this.toster.toastrConfig.positionClass = 'toast-bottom-left';
    this.toster.warning("Please Login or Sign up For Take Test")
  }
  
}
