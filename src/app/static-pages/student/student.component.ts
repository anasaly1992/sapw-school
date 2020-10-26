import { Component, OnInit } from '@angular/core';
import { StudentService } from '../_services/student.service';
import { StaticPagesService } from '../_services/static-pages.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  yourLectures: any;
  whichSubjectToFollow: any;
  yourSubjects: any = {};
  followLectures: any;
  constructor(
    private studentService: StudentService,
    private staticPagesService: StaticPagesService
  ) {
    this.yourLectures = this.studentService.yourLectures;
    this.whichSubjectToFollow = this.studentService.whichSubjectToFollow;
    this.followLectures = this.staticPagesService.followLectures;
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
}
