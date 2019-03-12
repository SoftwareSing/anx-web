import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendNavbarComponent } from 'client/app/backend-navbar/backend-navbar.component';

describe('BackendNavbarComponent', () => {
  let component: BackendNavbarComponent;
  let fixture: ComponentFixture<BackendNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
