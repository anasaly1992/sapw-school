import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { StaticPagesComponent } from './static-pages.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AboutComponent } from './about/about.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    StaticPagesComponent,
    TeacherComponent,
    HomeComponent,
    StudentComponent,
    AboutComponent,
    QuestionsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StaticPagesModule {}
