import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-layout',
  template: `
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styles: []
})
export class ManagementLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
