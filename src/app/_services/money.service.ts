import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from "../_config/config";
import {Observable} from "rxjs";
import {Money} from "../money";


@Injectable()
export class MoneyService {
  readonly rootUrl = Config.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(this.rootUrl + '/categories');
  }

  getTypes() {
    return this.http.get(this.rootUrl + '/money/types');
  }

  getStat() {
    return this.http.get(this.rootUrl + '/money/stat');
  }

  getAll(){
    return this.http.get(this.rootUrl + '/money');
  }

  createMoney(money) {
    return this.http.post(this.rootUrl + '/money', {data: money});
  }

  deleteMoney(id) {
    return this.http.delete(this.rootUrl + '/money/' + id);
  }
}
