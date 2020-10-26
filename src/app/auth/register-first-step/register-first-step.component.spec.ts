import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFirstStepComponent } from './register-first-step.component';

describe('RegisterFirstStepComponent', () => {
  let component: RegisterFirstStepComponent;
  let fixture: ComponentFixture<RegisterFirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFirstStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
