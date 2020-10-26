import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AccountService } from '../_services';

@Injectable({
  providedIn: 'root',
})
export class AuthOnlyGuestGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const account = this.accountService.accountValue;
    if (!account) {
      // You are guest, so you can visit this url
      return true;
    }

    // you are a member, so go to your platform
    if (account.Result.Role === 'Student') {
      this.router.navigate(['/platform/students'], {
        queryParams: { returnUrl: state.url },
      });
    } else if (account.Result.Role === 'Teacher') {
      this.router.navigate(['/platform/teachers'], {
        queryParams: { returnUrl: state.url },
      });
    }
    return false;
  }
}
