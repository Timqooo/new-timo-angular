import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyBEIa-WYes_UQZm-y4svEU8KYWjW5nNtK0",
  authDomain: "bookifylibrary.firebaseapp.com",
  projectId: "bookifylibrary",
  storageBucket: "bookifylibrary.firebasestorage.app",
  messagingSenderId: "976622589228",
  appId: "1:976622589228:web:d10678fd25015f2fcf4889",
  measurementId: "G-S6WJTGS6E3"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), importProvidersFrom(HttpClientModule), importProvidersFrom(
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  )]
};

