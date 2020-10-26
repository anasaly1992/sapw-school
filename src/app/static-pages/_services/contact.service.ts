import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  statusTrue = new Subject<boolean>();
  objToPost = {
    user_name: null,
    user_email: null,
    content: null
  };
  constructor(private http: HttpClient) { }

  applySending(objToPost) {
    this.http
      .post('https://stagging.spawschool.com/api/V1/Home/ContactUs', objToPost)
      .subscribe(
        (res: any) => {
          this.statusTrue.next(true);
        },
        (err) => {
          this.statusTrue.next(false);
        }
      );
  }
}
