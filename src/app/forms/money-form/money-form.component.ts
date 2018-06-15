import { Component, OnInit } from '@angular/core';
import {MoneyService} from "../../_services/money.service";
import {NgForm} from "@angular/forms";
import {MoneyCategory} from "../../money";
import {AlertService} from "../../_services/alert.service";
import {MoneyComponent} from "../../admin/money/money.component";

@Component({
  selector: 'app-money-form',
  templateUrl: './money-form.component.html',
  styleUrls: ['./money-form.component.css']
})
export class MoneyFormComponent implements OnInit {

  _money: any;
  _categories: any;

  categories: MoneyCategory[];
  types = [
    { value: 1, viewValue: "Przychody" },
    { value: 2, viewValue: "Wydatki" }
  ];


  constructor(
    private moneyService: MoneyService,
    private alertService: AlertService,
    private moneyComponent: MoneyComponent
  ) {
    this.getCategory();
  }

  ngOnInit() {
    this.resetForm();
  }

  getCategory() {
    this.moneyService.getCategory()
      .subscribe((res: MoneyCategory[]) => {
        this._categories = res;
      });
  }

  resetForm(form? : NgForm) {
    if(form != null)
      form.reset();

    this._money = {
      date: '',
      typ: '',
      category: '',
      title: ' ',
      amountTotal: null,
    }
  }

  onChange() {
    this.categories = this._categories.filter(
      x => x.moneyType.id === this._money.typ
    );
  }

  OnSubmit(form: NgForm) {
    if(form.valid) {
      this.moneyService.createMoney(form.value)
        .subscribe(res => this.setMessage(res));

      this.moneyComponent.showForm = false;
      this.moneyComponent.initTable();
      this.resetForm();
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
