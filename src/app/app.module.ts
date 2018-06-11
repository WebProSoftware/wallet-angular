import  { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { SliderComponent } from './index/slider/slider.component';
import { FooterComponent } from './index/footer/footer.component';
import { MainComponent } from './index/main/main.component';
import { RegisterComponent } from './register/register.component';
import { TextBoxComponent } from './utils/text-box/text-box.component';

import { LoginFormComponent } from './forms/login-form/login-form.component';

// Auth imports
import { fakeBackendProvider } from "./_helpers/fake-backend";

import { AlertComponent } from './_directives/alert/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { AlertService } from "./_services/alert.service";
import { AuthenticationService } from "./_services/authentication.service";
import { UserService } from "./_services/user.service";
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminNavbarComponent } from './admin/_component/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin/_component/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin/_component/admin-footer/admin-footer.component';
import { AdminComponent } from './admin/_layout/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    IndexComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    TextBoxComponent,
    LoginFormComponent,
    AlertComponent,
    DashboardComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
