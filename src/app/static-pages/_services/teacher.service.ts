import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  beTeacher = {
    title: 'كن معلما.. كن شريكا في النجاح',
    img: 'assets/images/group-594.png',
    button: 'إبدأ الأن',
    par:
      'ذاكر وحل تمارين مع اكبر مدرسين في مصر لايف، وأنت في بيتك، ووفر وقت وزحمه وعدم تركيز ومتقبلش بأي مدرس علشان هو ده المتاح.',
  };

  startTeaching = {
    title: 'أبدا التدريس من أي مكان',
    par:
      'قم بمتابعه دروسك والتفاعل مع المدرسين عن طريق تطبيقتنا المختلفه من خلال الاندرويد او الايفون .. ويمكنك ايضا المتابعه من خلال الموقع الالكتروني.. ',
    list: [
      {
        par: 'سهل الاستخدام',
        icon: 'assets/icons/path.png',
      },
      {
        par: 'تابع دروسك مباشره',
        icon: 'assets/icons/icon.png',
      },
      {
        par: 'ناقش درسك',
        icon: 'assets/icons/icon1.png',
      },
    ],
    img: 'assets/images/group-65.png',
  };

  constructor() {}
}
