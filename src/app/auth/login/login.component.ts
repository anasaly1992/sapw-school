import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AccountService } from '../../core/_services';
import { LoginInfo } from '../../core/_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewChecked {
  constructor(private accountService: AccountService) { }

  user: LoginInfo;
  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', Validators.required),
    deviceID: new FormControl('web'),
  });
  get email() {
    return this.loginForm.get('Email');
  }
  get password() {
    return this.loginForm.get('Password');
  }

  login() {
    this.user = this.loginForm.value;
    this.accountService.login(this.user);
  }
  socialLogin(socialProvider: string) {
    this.accountService.socialLogin(socialProvider);
  }
  ngOnInit(): void {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   console.log(this.user);
    // });
  }
  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }
}
