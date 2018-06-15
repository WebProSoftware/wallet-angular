import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../_services/user.service";
import {User} from "../../users";
import {MatSort, MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-admin-config',
  templateUrl: './admin-config.component.html',
  styleUrls: ['./admin-config.component.css']
})
export class AdminConfigComponent implements OnInit {

  users: User[];

  displayedColumns = ['ID', 'Email'];
  dataSource: any;
  isLoading: boolean = false;
  showForm: boolean = false;
  summary: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll()
      .subscribe((res: User[]) => {
        this.users = res;
        this.isLoading  = true;
        this.dataSource =  new MatTableDataSource<User>(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onClick(row):void {
    console.log(row);
  }

}
