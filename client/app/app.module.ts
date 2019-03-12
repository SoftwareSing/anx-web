import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'client/app/app-routing.module';
import { AppComponent } from 'client/app/app.component';

import { BackendLoginComponent } from 'client/app/backend-login/backend-login.component';
import { BackendNavbarComponent } from 'client/app/backend-navbar/backend-navbar.component';
import { CoursesComponent } from 'client/app/coursesTable/coursesTable.component';
import { FooterComponent } from 'client/app/footer/footer.component';
import { HomeComponent } from 'client/app/home/home.component';
import { HomeLayoutComponent } from 'client/app/layout/home-layout/home-layout.component';
import { ManagementLayoutComponent } from 'client/app/layout/management-layout/management-layout.component';
import { NavbarComponent } from 'client/app/navbar/navbar.component';
import { NewsComponent } from 'client/app/newsTable/newsTable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeLayoutComponent,
    ManagementLayoutComponent,
    CoursesComponent,
    NewsComponent,
    BackendNavbarComponent,
    BackendLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
