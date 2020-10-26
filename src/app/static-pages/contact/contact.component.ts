import { Component, OnInit, ViewChild } from '@angular/core';
import { StaticPagesService } from '../_services/static-pages.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../_services/contact.service'
// import nodemailer from 'nodemailer';
// import { SES } from 'aws-sdk'
// import * as aws from 'aws-sdk';
// // import { AwsConfig } from '../../../awsConfig';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  mail: any;
  name: any;
  message: any;
  // transporter = nodemailer.createTransport({
  //   SES: new aws.SES({ apiVersion: '2010-12-01' }),
  //   service: 'gmail',
  //   auth: {
  //     user: 'spawschool@gmail.com', // generated ethereal user
  //     pass: '0M@r1234',
  //   },
  // });

  @ViewChild('mailForm', { static: true }) mailFormm: NgForm;
  contactData = {
    title: 'تواصل معنا',
    subTitle: 'يسعدنا ان تتوصل معنا لتشاركنا رأيك إو استفسارك',
    formData: [
      {
        label: 'نتشرف بيك؟',
        placeholder: 'أدخل اسمك هنا',
        type: 'text',
        name: 'name',
      },
      {
        label: 'البريد الالكتروني',
        placeholder: 'أدخل بريدك هنا',
        type: 'email',
        name: 'email',
      },
      {
        label: 'رسالتك',
        placeholder: 'اكتب استفسارك او رسالتك هنا',
        type: 'text',
        name: 'message',
      },
    ],
  };

  data: any;
  beTeacher: any;
  socialMedia = {
    title: 'صفحات التواصل الاجتماعي',
    icons: [
      '../../assets/icons/facebook@2x.png',
      '../../assets/icons/twitter@2x.png',
      '../../assets/icons/insgram.png',
    ],
  };
  statusTrue: boolean;
  constructor(
    private staticPagesService: StaticPagesService,
    private http: HttpClient,
    private contactService: ContactService
  ) {
    this.beTeacher = this.staticPagesService.beTeacher;
  }

  ngOnInit(): void {
    // console.log(this.data);
  }

  applySending(mailForm: NgForm) {
    this.name = mailForm.value.name;
    this.mail = mailForm.value.email;
    this.message = mailForm.value.message;
    let objToPost = {
      user_name: this.name,
      user_email: this.mail,
      content: this.message,
    };

    this.contactService.applySending(objToPost);
    this.contactService.statusTrue.subscribe(status => {
      this.statusTrue = status;
      mailForm.reset();
    })
    // console.log(this.contactService.statusTrue);
    // this.statusTrue = this.contactService.statusTrue;


    // this.http
    //   .post('https://stagging.spawschool.com/api/V1/Home/ContactUs', objToPost)
    //   .subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       this.statusTrue = true;
    //     },
    //     (err) => {
    //       console.error(err);
    //       this.statusTrue = false;
    //     }
    //   );
  }
}
