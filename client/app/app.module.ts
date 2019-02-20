import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'client/app/app-routing.module';
import { AppComponent } from 'client/app/app.component';

import { CoursesComponent } from 'client/app/coursesTable/coursesTable.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ManagementLayoutComponent } from './layout/management-layout/management-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './newsTable/newsTable.component';
import { BackendNavbarComponent } from './backend-navbar/backend-navbar.component';
import { BackendLoginComponent } from './backend-login/backend-login.component';

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
