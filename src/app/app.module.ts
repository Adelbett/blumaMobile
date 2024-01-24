// import { NgModule } from '@angular/core';
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';
// import { FormGroup, FormsModule } from '@angular/forms';
// import { SwiperModule } from 'swiper/angular';
// import { NgCalendarModule } from 'ionic2-calendar';
// import { IonicStorageModule } from '@ionic/storage-angular';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ForgetpasswordPipe } from './forgetpassword.pipe';
// import { FgpasswordPipe } from './fgpassword.pipe';
import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordPipe } from './forgetpassword.pipe';
import { FgpasswordPipe } from './fgpassword.pipe';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';





@NgModule({
  declarations: [AppComponent, ForgetpasswordPipe, FgpasswordPipe],
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    NgCalendarModule,
    IonicStorageModule.forRoot({

    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [{

    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  },
  [Storage]],
  bootstrap: [AppComponent],
})
export class AppModule { }
