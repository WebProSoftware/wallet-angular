import { Component, OnInit } from '@angular/core';
import {AuthGuard} from "../../../_guards/auth.guard";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  admin: boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', admin: false },
  { path: '/user-profile', title: 'Ustawienia użytkownika',  icon:'person', class: '', admin: false },
  { path: '/money', title: 'Mój portfel',  icon:'content_paste', class: '', admin: false },
  { path: '/distance', title: 'Kilometrówka',  icon:'location_on', class: '', admin: false },
  { path: '/admin', title: 'Admin Panel',  icon:'notifications', class: '', admin: true },
];

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  menuItems: any[];
  isAdmin: boolean;

  constructor() {
    this.isAdmin = this.levelAdmin();
  }

  ngOnInit() {
    if(this.isAdmin) {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    else {
      this.menuItems = ROUTES.filter(menuItem => menuItem.admin === false);
    }
  }

  levelAdmin(): boolean {
    let access = JSON.parse(localStorage.getItem('currentUser'));
    return access.level === 2;
  }

  isMobileMenu() {
    if(window.innerWidth > 991) {
      return false;
    }
    return true;
  };

}
