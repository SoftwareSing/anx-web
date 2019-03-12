import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-layout',
  template: `
  <app-backend-navbar></app-backend-navbar>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class ManagementLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
