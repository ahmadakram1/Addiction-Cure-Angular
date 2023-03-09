import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-testimoial',
  templateUrl: './testimoial.component.html',
  styleUrls: ['./testimoial.component.css']
})
export class TestimoialComponent {
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
}
