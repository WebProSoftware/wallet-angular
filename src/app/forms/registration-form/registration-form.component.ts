import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "../../_services/user.service";
import {User} from "../../user";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  error = false;
  errorText : string;

  info = false;
  infoText: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.reset();
    this.user = {
      email: "",
      password: ""
    };
  }

  OnSubmit(form: NgForm) {
    if(form.valid) {
      this.error = false;
      this.userService.registerUser(form.value)
        .subscribe(res => { this.setMessage(res) })
    }
    else {
      this.setMessage({
        status: 'fail',
        msg: "Błąd formularza"
      });
    }
  }

  setMessage(res) {
    this.error = false;
    this.errorText = "";

    if(res.status === "fail") {
      this.error = true;
      this.errorText = res.msg;
    }
    if(res.status === "success") {
      this.info = true;
      this.infoText = res.msg;
      this.resetForm();
    }
  }

}
