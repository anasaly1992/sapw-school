﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { SocialAuthService } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';

import { environment } from '../../../../environments/environment';
import { Account, LoginInfo } from '../../_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private socialAuthService: SocialAuthService
  ) {
    this.accountSubject = new BehaviorSubject<Account>(
      JSON.parse(localStorage.getItem('account'))
    );
    this.account = this.accountSubject.asObservable();
  }

  public get accountValue(): Account {
    return this.accountSubject.value;
  }

  login(loginValue: LoginInfo) {
    return this.http
      .post<Account>(`${environment.apiUrl}/V1/auth/user/login`, loginValue)
      .subscribe((account) => {
        // store account details and jwt token in local storage to keep account logged in between page refreshes
        localStorage.setItem('account', JSON.stringify(account));
        this.accountSubject.next(account);
        this.router.navigate(['/students']);
      });
  }

  socialLogin(socialPlatform: string) {
    let socialPlatformProvider;
    switch (socialPlatform) {
      case 'google':
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        break;
      case 'facebook':
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        break;
      default:
        break;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
      let { email, id } = userData;
      let loginValue: LoginInfo = {
        email,
        password: `S@p@w${id}`,
        device_id: 'web',
      };

      this.login(loginValue);
    });
  }

  logout() {
    // remove account from local storage and set current account to null
    localStorage.removeItem('account');
    this.accountSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  register(account: Account) {}
}
