import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Money} from "../../../money";
import {MoneyService} from "../../../_services/money.service";

@Component({
  selector: 'app-dialog-money',
  templateUrl: './dialog-money.component.html',
  styleUrls: ['./dialog-money.component.css']
})
export class DialogMoneyComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogMoneyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Money,
    private moneyService: MoneyService
  ) { }

  delete(id): void {
    this.moneyService.deleteMoney(id)
      .subscribe(res => {
        this.dialogRef.close();
      })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
