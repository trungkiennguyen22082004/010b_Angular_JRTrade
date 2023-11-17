import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

const routes: Routes = 
[
    {
        path: '', redirectTo:'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent, title: 'Log in - JRTrade',
    },
    {
        path: 'signup', component: SignupComponent, title: 'Sign up - JRTrade'
    },
    {
        path: 'forgotpassword', component: ForgotpasswordComponent, title: 'Forgot Password - JRTrade'
    },
    {
        path: 'home', component: HomeComponent, title: "Home - JRTrade"
    }
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
