import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class StaticPagesService {
  howWork = {
    title: 'كيف تعمل إسباو',
    par: 'ببساطة وبخطوات سريعه يمكنك الاشتراك ومتابعة دروسك من أي مكان',
    howWorkCardData: [
      {
        header: 'سجل',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/login-1.png',
        hoverIcon: '../../assets/icons/login-white.png',
        number: '1',
        hover: 1,
      },
      {
        header: 'أختر مجموعتك',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/calendar-blue.png',
        hoverIcon: '../../assets/icons/create-lecture.png',
        number: '2',
        hover: 1,
      },
      {
        header: 'إدفع',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/pay.png',
        hoverIcon: '../../assets/icons/pay-white.png',
        number: '3',
        hover: 1,
      },
      {
        header: 'تابع دروسك',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/video-call.png',
        hoverIcon: '../../assets/icons/video-call-white.png',
        number: '4',
        hover: 1,
      },
    ],
  };

  beTeacher = {
    img: 'assets/images/group-111.png',
    header: 'كن معلما.. كن شريكا في النجاح',
    par:
      'سجل معنا الان وابدأ في شرح الدروس وتلقي الاموال.. كن شريك معنا في النجاح',
  };

  followLectures = {
    img: 'assets/images/group-8.png',
    header: 'تابع الدروس علي أي جهاز',
    par:
      'قم بمتابعه دروسك والتفاعل مع المدرسين عن طريق تطبيقتنا المختلفه من خلال الاندرويد او الايفون .. ويمكنك ايضا المتابعه من خلال الموقع الالكتروني.. ',
    list: [
      {
        img: '../../assets/icons/path.png',
        par: 'سهل الاستخدام',
      },
      {
        img: '../../assets/icons/icon.png',
        par: 'تابع دروسك مباشره',
      },
      {
        img: '../../assets/icons/icon1.png',
        par: 'ناقش درسك',
      },
    ],
    downLoadImg: {
      google: 'assets/images/button-play.png',
      apple: 'assets/images/button-app.png',
    },
  };

  howLeaning = {
    title: 'كيف يتم التدريس؟',
    par: 'ببساطة وبخطوات سريعه يمكنك التسجيل معنا لتكون شريكا بالنجاح',
    howLeaningCardData: [
      {
        header: 'سجل',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/login-1.png',
        hoverIcon: '../../assets/icons/login-white.png',
        hover: 1,
      },
      {
        header: 'أنشي الدرس',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/calendar-blue.png',
        hoverIcon: '../../assets/icons/create-lecture.png',
        hover: 1,
      },
      {
        header: 'أنشى المجموعات',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/ic-outline-groups-blue.png',
        hoverIcon: '../../assets/icons/create.png',
        hover: 1,
      },
      {
        header: 'حصل مكسبك',
        par:
          'قم بالتسجيل الأن معنا في بضع خطوات لنتنقل في عالم ملي بالمرح والسهولة',
        icon: '../../assets/icons/video-call.png',
        hoverIcon: '../../assets/icons/video-call-white.png',
        hover: 1,
      },
    ],
  };

  studentEveryWhere = {
    header: 'طلاب من كل مكان',
    par: 'إنضم الي كل هولاء وشارك معهم دروسك وبعض المرح',
  };

  constructor(private http: HttpClient) { }
  getSubjectsData() {
    return this.http.get('https://stagging.spawschool.com/api/V1/Home/Courses')
  }
}
