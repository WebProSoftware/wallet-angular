import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import {Config} from "../_config/config";

@Injectable()
export class UserService {
  readonly rootUrl = Config.API_ENDPOINT;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  registerUser(user: User) {
    return this.http.post(this.rootUrl + '/user/register', { data: user });
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
