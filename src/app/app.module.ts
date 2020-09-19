import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Resume1Module} from './resume1/resume1.module'
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {approutes} from './approute.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment'
import {TemplatesModule} from './templates/templates.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home.component';
import { NgChartjsModule } from 'ng-chartjs';
var firebaseConfig = {
  apiKey: "AIzaSyDEFgXunKR2CgVrJkFnhJ6xfeglPDSkuN0",
  authDomain: "chatapp-378c0.firebaseapp.com",
  databaseURL: "https://chatapp-378c0.firebaseio.com",
  projectId: "chatapp-378c0",
  storageBucket: "chatapp-378c0.appspot.com",
  messagingSenderId: "773121408656",
  appId: "1:773121408656:web:c9f0841782f1e5b560a215",
  measurementId: "G-23JCV9DJKX"
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    ],
  imports: [
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    Resume1Module,
    RouterModule.forRoot(approutes),
    TemplatesModule,
    BrowserAnimationsModule,
    NgChartjsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
