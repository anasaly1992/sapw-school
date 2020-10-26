import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterThirdStepComponent } from './register-third-step.component';

describe('RegisterThirdStepComponent', () => {
  let component: RegisterThirdStepComponent;
  let fixture: ComponentFixture<RegisterThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
