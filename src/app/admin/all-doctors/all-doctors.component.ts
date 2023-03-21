import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';
import { MatDialog, } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {


  @ViewChild("CreateForm") Create: any;
  @ViewChild("UpdateForm") Update: any;
  @ViewChild("DeleteForm") Delete: any;
  @ViewChild("DetailsForm") Details: any;



  data:any;
  constructor(public adminService: AdminService, public dialog: MatDialog, public sharedservice: SharedService,private http: HttpClient) {
     //get request from web api
  this.http.get('https://therichpost.com/testjsonapi/users/').subscribe(data => { this.data = data;

  setTimeout(()=>{   
    $('#datatableexample').DataTable( {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu : [5, 10, 25]
  } );
  }, 1);
        }, error => console.error(error));

  }


  CreateDoctorForm = new FormGroup({

    Firstname: new FormControl("", [Validators.required]),
    Lastname: new FormControl("", [Validators.required]),
    // Imagename: new FormControl("", [Validators.required]),
    Level1: new FormControl("", [Validators.required]),
    Username: new FormControl("", [Validators.required]),
    Password: new FormControl("", [Validators.required]),
    Email: new FormControl("", [Validators.required]),
    Roleid: new FormControl("", [Validators.required]),
    CATEGORYID: new FormControl("", [Validators.required]),


  })


  UpdateDoctorForm = new FormGroup({

    doctodid: new FormControl(''),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    // Imagename: new FormControl("", [Validators.required]),
    level1: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    roleid: new FormControl("", [Validators.required]),
    categoryID: new FormControl("", [Validators.required]),


  })




  ngOnInit() {
    this.adminService.GetAllDoctors()
    this.sharedservice.GetCategory()
  }

  async openDetalisDialog(Doctor_id: number) {

    await this.adminService.GetDoctorById(Doctor_id);
    this.dialog.open(this.Details);
  }

  OpenCreateDialog() {

    this.dialog.open(this.Create)
  }

  async CreateDoctor() {

    await this.adminService.createdoctor(this.CreateDoctorForm.value);
    this.adminService.GetAllDoctors();
  }


  UploadImage(Input:any){

    if (Input.files[0] != 0) {
      let UploadedImage = Input.files[0]; //ImageFile
      let formData = new FormData()   
      formData.append("fileForImage",UploadedImage)
      this.sharedservice.UploadImage(formData)
    }
   
  }

  
  async OpenUpdateDialog(doctorId: number) {
    await this.adminService.GetDoctorById(doctorId)
    this.UpdateDoctorForm.patchValue(this.adminService.DoctorById)
    this.dialog.open(this.Update)
  }


  async UpdateDoctor() {
    await this.adminService.UpdateDoctor(this.UpdateDoctorForm.value);
    this.adminService.GetAllDoctors();
  }

  SelectedDoctor = 0;
  OpenDeleteDialog(doctorId: number) {
    this.SelectedDoctor = doctorId
    this.dialog.open(this.Delete)
  }


  async DeleteDoctor() {
    await this.adminService.Deletedoctor(this.SelectedDoctor);
    this.adminService.GetAllDoctors();

  }


















}
