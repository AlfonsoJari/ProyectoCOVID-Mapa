import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGraphComponent } from './login-graph.component';

describe('LoginGraphComponent', () => {
  let component: LoginGraphComponent;
  let fixture: ComponentFixture<LoginGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
