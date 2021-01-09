import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGraphComponent } from './signup-graph.component';

describe('SignupGraphComponent', () => {
  let component: SignupGraphComponent;
  let fixture: ComponentFixture<SignupGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
