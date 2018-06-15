import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service'
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {AlertService} from "../../_services/alert.service";
import {User} from "../../users";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  _user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  postcodePattern = "^[0-9]{2}-[0-9]{3}$";
  isLoading: boolean = false;

  constructor(private userService: UserService, private alertService: AlertService) { }

  getUserDetails() {
    this.userService.getById()
      .subscribe((data: User) => {
        this.isLoading = true;
        this._user = data;
        if(!data.UserDetails){
          this._user.UserDetails = {}
        }
        if(!data.UserAdress){
          this._user.UserAdress = {}
        }
      });
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.reset();
    this.getUserDetails();
  }

  ngOnInit() {
    this.resetForm();
  }

  OnSubmit(form: NgForm) {
    if(form.valid) {
      this.userService.update(form.value)
        .subscribe(res => this.setMessage(res));
    }
    else {
      this.alertService.error("Błąd formularza. Sprawdź poprawność");
    }
  }

  setMessage(res) {
    if(res.status === "fail") { this.alertService.error(res.msg) }
    if(res.status === "success") { this.alertService.success(res.msg) }
  }


}
