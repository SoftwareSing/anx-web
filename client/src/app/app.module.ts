import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '~/app/app-routing.module';
import { AppComponent } from '~/app/app.component';

import { BackendLoginComponent } from '~/app/backend-login/backend-login.component';
import { BackendNavbarComponent } from '~/app/backend-navbar/backend-navbar.component';
import { CoursesComponent } from '~/app/coursesTable/coursesTable.component';
import { FooterComponent } from '~/app/footer/footer.component';
import { HomeComponent } from '~/app/home/home.component';
import { HomeLayoutComponent } from '~/app/layout/home-layout/home-layout.component';
import { ManagementLayoutComponent } from '~/app/layout/management-layout/management-layout.component';
import { NavbarComponent } from '~/app/navbar/navbar.component';
import { NewsComponent } from '~/app/newsTable/newsTable.component';

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
