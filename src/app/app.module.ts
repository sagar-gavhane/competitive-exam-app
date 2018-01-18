import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import pipe
import { TitlecasePipe } from '../pipes/titlecase/titlecase';

// import pages
import { VideoCategoryPage } from '../pages/video-category/video-category';
import { VideoListPage } from '../pages/video-list/video-list';
import { VideoWatchPage } from '../pages/video-watch/video-watch';
import { AudioCategroyPage } from '../pages/audio-categroy/audio-categroy';
import { AudioListPage } from '../pages/audio-list/audio-list';
import { AudioListenPage } from '../pages/audio-listen/audio-listen';
import { NotesCategoryPage } from '../pages/notes-category/notes-category';
import { NotesListPage } from '../pages/notes-list/notes-list';
import { NotesReadPage } from '../pages/notes-read/notes-read';
import { QuestionCategoryPage } from '../pages/question-category/question-category';
import { QuestionListPage } from '../pages/question-list/question-list';
import { SyllabusCategoryPage } from '../pages/syllabus-category/syllabus-category';
import { SyllabusListPage } from '../pages/syllabus-list/syllabus-list';
import { JobCategoryPage } from '../pages/job-category/job-category';
import { JobListPage } from './../pages/job-list/job-list';
import { GoogleMapPage } from '../pages/google-map/google-map';
import { AdsViewPage } from '../pages/ads-view/ads-view';
import { AdsSendPage } from '../pages/ads-send/ads-send';
import { AdsSentSuccessPage } from '../pages/ads-sent-success/ads-sent-success';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TitlecasePipe,
    VideoCategoryPage,
    VideoListPage,
    VideoWatchPage,
    AudioCategroyPage,
    AudioListPage,
    AudioListenPage,
    NotesCategoryPage,
    NotesListPage,
    NotesReadPage,
    QuestionCategoryPage,
    QuestionListPage,
    SyllabusCategoryPage,
    SyllabusListPage,
    JobCategoryPage,
    JobListPage,
    GoogleMapPage,
    AdsViewPage,
    AdsSendPage,
    AdsSentSuccessPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideoCategoryPage,
    VideoListPage,
    VideoWatchPage,
    AudioCategroyPage,
    AudioListPage,
    AudioListenPage,
    NotesCategoryPage,
    NotesListPage,
    NotesReadPage,
    QuestionCategoryPage,
    QuestionListPage,
    SyllabusCategoryPage,
    SyllabusListPage,
    JobCategoryPage,
    JobListPage,
    GoogleMapPage,
    AdsViewPage,
    AdsSendPage,
    AdsSentSuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
