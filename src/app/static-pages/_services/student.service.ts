import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  yourLectures = {
    title: 'دروسك معك في كل مكان',
    par:
      'ذاكر وحل تمارين مع اكبر مدرسين في مصر لايف، وأنت في بيتك، ووفر وقت وزحمه وعدم تركيز ومتقبلش بأي مدرس علشان هو ده المتاح.',
    button: 'إبدأ الأن',
    img: 'assets/images/group-260.png',
  };
  whichSubjectToFollow = {
    title: 'محتاج تتابع مادة أية؟',
    whichSubjectToFollowCardData: [
      {
        header: 'كيمياء',
        img: 'assets/icons/group-35.png',
        color: '#05bace',
      },
      {
        header: 'أحياء',
        img: 'assets/icons/group-37.png',
        color: '#2cc15f',
      },
      {
        header: 'فيزياء',
        img: 'assets/icons/group-38.png',
        color: '#bf38ca',
      },
      {
        header: 'رياضيات',
        img: 'assets/icons/group-292.png',
        color: '#ff8a2b',
      },
    ],
  };

  constructor() {}
}
