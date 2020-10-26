import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  firstStepFormData = {};
  secondStepFormData = {};

  saveStepData($event) {
    this[$event.propName] = { ...$event.data };
    console.log(`${$event.propName} =>`, this[$event.propName]);
  }

  ngOnInit(): void {}
}
