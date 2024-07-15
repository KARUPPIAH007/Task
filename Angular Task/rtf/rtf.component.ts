import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent {
  userForm: any;

  ngOnInit() {
    this.userForm = new FormGroup({
      fname : new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z@]{3,20}$")]),
      passwd: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z@]{8,100}$")]),
      email : new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
      term:new FormControl("",Validators.requiredTrue)
    });
  }
}