import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from "./register/register.component";

import { AuthGuard } from './_guards/auth.guard';
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {AdminComponent} from "./admin/_layout/admin/admin.component";
import {UserProfileComponent} from "./admin/user-profile/user-profile.component";
import {MoneyComponent} from "./admin/money/money.component";
import {DistanceComponent} from "./admin/distance/distance.component";
import {AdminGuard} from "./_guards/admin.guard";
import {AdminConfigComponent} from "./admin/admin-config/admin-config.component";

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children:
      [
        { path: '', component: DashboardComponent , outlet: 'admin-page' },
      ]
  },
  {
    path: 'user-profile',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children:
      [
        { path: '', component: UserProfileComponent, outlet: 'admin-page' },
      ]
  },
  {
    path: 'money',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children:
      [
        { path: '', component: MoneyComponent, outlet: 'admin-page' },
      ]
  },
  {
    path: 'distance',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children:
      [
        { path: '', component: DistanceComponent , outlet: 'admin-page' },
      ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminComponent,
    children:
      [
        { path: '', component: AdminConfigComponent , outlet: 'admin-page' },
      ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
