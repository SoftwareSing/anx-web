import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackendLoginComponent } from 'client/app/backend-login/backend-login.component';
import { CoursesComponent } from 'client/app/coursesTable/coursesTable.component';
import { HomeComponent } from 'client/app/home/home.component';
import { HomeLayoutComponent } from 'client/app/layout/home-layout/home-layout.component';
import { ManagementLayoutComponent } from 'client/app/layout/management-layout/management-layout.component';
import { NewsComponent } from 'client/app/newsTable/newsTable.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'news', component: NewsComponent}
    ]
  },
  {
    path: 'backend',
    component: ManagementLayoutComponent,
    children: [
      {path: '', component: BackendLoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
