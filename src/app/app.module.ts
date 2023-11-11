import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

@NgModule
({
    declarations: 
    [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        ForgotpasswordComponent
    ],
    imports: 
    [
        BrowserModule,
        AppRoutingModule,

        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        
        provideFirebaseApp(() => initializeApp({"projectId":"jaderabbittrade","appId":"1:838523512875:web:bbe4947dfb1dc054bd626e","databaseURL":"https://jaderabbittrade-default-rtdb.firebaseio.com","storageBucket":"jaderabbittrade.appspot.com","apiKey":"AIzaSyDt1Kt3lHUI1aDzsk7ic0RXzs-dvlUm0Bo","authDomain":"jaderabbittrade.firebaseapp.com","messagingSenderId":"838523512875","measurementId":"G-BBFJQV3XFH"})),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        NoopAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
