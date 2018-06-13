import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service'
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Response} from "@angular/http";

export interface UserAdress {
  city?: string;
  postCode?: string;
  street?: string;
  numberLocal?: string;
}

export interface UserDetails {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;

}

export interface User {
  id: number;
  email: string;
  UserAdress?: UserAdress;
  UserDetails?: UserDetails;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  _user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isLoading: boolean = false;

  constructor(private userService: UserService) {}

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
        console.log(data);
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
    console.log(form);
  }

}
