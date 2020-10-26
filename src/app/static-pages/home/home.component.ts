import { Component, OnInit } from '@angular/core';
import { StaticPagesService } from '../_services/static-pages.service';
import { HomeService } from '../_services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sliderData: any[];
  howWork: any;
  yourSubjects: any = {};
  studentEveryWhere: any;
  beTeacher: any;
  followLectures: any;

  constructor(
    private homeService: HomeService,
    private staticPagesService: StaticPagesService,
    private http: HttpClient
  ) {
    this.howWork = this.staticPagesService.howWork;
    this.studentEveryWhere = this.staticPagesService.studentEveryWhere;
    this.beTeacher = this.staticPagesService.beTeacher;
    this.followLectures = this.staticPagesService.followLectures;
    this.sliderData = this.homeService.sliderData;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.staticPagesService.getSubjectsData().subscribe(
      (response: any) => {
        this.yourSubjects = response
      }, err => {
        console.log(err);
      }
    );
  }
  Style(icon) {
    let style;
    style = {
      'background-image': 'url(' + icon + ')',
    };
    return style;
  }

  hoverStyle(hoverIcon) {
    let style;
    style = {
      'background-image': 'url(' + hoverIcon + ')',
    };
    return style;
  }
}
