import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../_services/questions.service';
import { StaticPagesService } from '../_services/static-pages.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  frequentlyQuestions: any;
  isCollapsed = true;
  followLectures: any;
  constructor(
    private questionsService: QuestionsService,
    staticPagesService: StaticPagesService
  ) {
    this.frequentlyQuestions = questionsService.frequentlyQuestions;
    this.followLectures = staticPagesService.followLectures;
  }

  ngOnInit(): void {}
  isCollapsedd(i) {
    this.isCollapsed = !this.isCollapsed;
    this.questionsService.frequentlyQuestions.question[
      i
    ].isCollapsed = this.isCollapsed;
  }
}
