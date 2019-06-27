import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CarpenterPageModule } from '../pages/carpenter/carpenter.module';
import { LocksmithPageModule } from '../pages/locksmith/locksmith.module';
import { PainterPageModule } from '../pages/painter/painter.module';
import { PlumberPageModule } from '../pages/plumber/plumber.module';
import { FillDataPageModule} from '../pages/fill-data/fill-data.module';
import { LoginPage } from '../pages/login/login';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DetailPageModule } from '../pages/detail/detail.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { RequestPageModule } from '../pages/request/request.module';
import { EmailComposer } from  '@ionic-native/email-composer';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { JobsService } from '../services/jobs.service';
import { DetailPage } from '../pages/detail/detail';
import { from } from 'rxjs';
import { RequestPage } from '../pages/request/request';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CarpenterPageModule,
    LocksmithPageModule,
    PainterPageModule,
    PlumberPageModule,
    FillDataPageModule,
    SignUpPageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DetailPageModule,
    ProfilePageModule,
    RequestPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    DetailPage,
    RequestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JobsService,
    EmailComposer
  ]
})
export class AppModule {}
