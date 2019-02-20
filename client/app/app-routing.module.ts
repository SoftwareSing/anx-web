import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackendLoginComponent } from 'client/app/backend-login/backend-login.component';
import { CoursesComponent } from 'client/app/coursesTable/coursesTable.component';
import { NewsComponent } from 'client/app/newsTable/newsTable.component';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ManagementLayoutComponent } from './layout/management-layout/management-layout.component';

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
