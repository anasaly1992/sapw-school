import { Component, OnInit } from '@angular/core';
import { AboutService } from '../_services/about.service';
import { StaticPagesService } from '../_services/static-pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  learningFun: any;
  about: any;
  howWork: any;
  beTeacher: any;
  howLearning: any;
  hovered = 1;
  followLectures: any;
  constructor(
    private aboutService: AboutService,
    private staticPagesService: StaticPagesService
  ) {
    this.learningFun = this.aboutService.learningFun;
    this.about = this.aboutService.about;
    this.howWork = this.staticPagesService.howWork;
    this.beTeacher = this.staticPagesService.beTeacher;
    this.howLearning = this.staticPagesService.howLeaning;
    this.followLectures = this.staticPagesService.followLectures;
  }

  ngOnInit(): void { }
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
  buttonStyle(icon) {
    let style;
    style = {
      'background-image': 'url(' + icon + ')',
    };
    return style;
  }
  pressedStyle(icon) {
    let style;
    style = {
      'background-image': 'url(' + icon + ')',
    };
    return style;
  }
}
