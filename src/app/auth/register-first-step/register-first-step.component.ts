import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

import { Gender } from '../../core/_models';

@Component({
  selector: 'app-register-first-step',
  templateUrl: './register-first-step.component.html',
  styleUrls: ['./register-first-step.component.scss'],
})
export class RegisterFirstStepComponent implements OnInit {
  constructor() {}

  @Output() firstStepCompleted: EventEmitter<object> = new EventEmitter<
    object
  >();

  genders: Gender[] = [
    { value: '0', viewValue: 'ذكر' },
    { value: '1', viewValue: 'أنثي' },
  ];

  registerFirstForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile_number: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', Validators.required),
  });
  get first_name() {
    return this.registerFirstForm.get('first_name');
  }
  get last_name() {
    return this.registerFirstForm.get('last_name');
  }
  get email() {
    return this.registerFirstForm.get('email');
  }
  get mobile_number() {
    return this.registerFirstForm.get('mobile_number');
  }
  get gender() {
    return this.registerFirstForm.get('gender');
  }
  get date_of_birth() {
    return this.registerFirstForm.get('date_of_birth');
  }

  completeFirstStep() {
    this.registerFirstForm.value.date_of_birth = moment(
      new Date(this.registerFirstForm.value.date_of_birth).toISOString()
    ).format('YYYY-MM-DD');
    this.firstStepCompleted.emit({
      data: this.registerFirstForm.value,
      propName: 'firstStepFormData',
    });
  }

  ngOnInit(): void {}
}
