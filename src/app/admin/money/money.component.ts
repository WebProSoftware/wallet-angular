import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {
  MatSort, MatPaginator, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog,
} from '@angular/material';
import {MoneyService} from "../../_services/money.service";
import { Money } from "../../money";
import {DialogMoneyComponent} from "./dialog-money/dialog-money.component";


@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  _money: Money[];

  displayedColumns = ['Data', 'Typ', 'Kategoria', 'Kwota'];
  dataSource: any;
  isLoading: boolean = false;
  showForm: boolean = false;
  summary: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private moneyService: MoneyService, public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  initTable() {
    this.moneyService.getAll()
      .subscribe((data: Money[]) => {
        this._money = data;
        this.isLoading  = true;
        this.dataSource =  new MatTableDataSource<Money>(this._money);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.summary = this.calculation();
      });
  }

  ngOnInit() {
    this.initTable();
  }

  onClick(row): void {
    console.log(row);
    let dialogRef = this.dialog.open(DialogMoneyComponent, {
      width: '800px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initTable();
    });
  }

  calculation() {
    let sum: number = 0;
    if (this.dataSource)
      for (let row of this.dataSource.data) {
        if (row.id != 0) sum += row.amountTotal;
      }
    return sum.toFixed(2);
  }

  toogleForm() {
    this.showForm = !this.showForm;
  }
}

