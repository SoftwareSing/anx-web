import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from 'client/app/courses/courses.component';
import { NewsComponent } from 'client/app/news/news.component';
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
    path: 'management',
    component: ManagementLayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
