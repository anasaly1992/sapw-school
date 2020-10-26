import { Component, OnInit } from '@angular/core';

import { StaticPagesService } from '../_services/static-pages.service';
import { TeacherService } from '../_services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  beTeacher: any;
  howLearning: any;
  startTeaching: any;
  studentEveryWhere: any;

  constructor(
    private teacherService: TeacherService,
    private staticPagesService: StaticPagesService
  ) {
    this.beTeacher = this.teacherService.beTeacher;
    this.howLearning = this.staticPagesService.howLeaning;
    this.startTeaching = this.teacherService.startTeaching;
    this.studentEveryWhere = this.staticPagesService.studentEveryWhere;
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

  ngOnInit(): void {}
}
