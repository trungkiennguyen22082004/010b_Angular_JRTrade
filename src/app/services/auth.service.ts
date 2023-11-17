import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { ConstantsService } from './constants.service';
import { DataService } from './data.service';

@Injectable(
{
    providedIn: 'root'
})
export class AuthService 
{
    constructor(private constants: ConstantsService, private data: DataService, private fireAuth: AngularFireAuth, private router: Router) 
    {
    }

    // Login Method
    login(email: string, password: string)
    {
        this.fireAuth.signInWithEmailAndPassword(email, password).then
        ( 
            () =>
            {
                alert('Loging in successfully')

                this.data.getUserData();
            },
            err => 
            {
                alert('Something went wrong while logging in: ' + err.message);
                this.router.navigate(['/login']);
            }
        )
    }

    // Logout Method
    logout()
    {
        this.fireAuth.signOut().then
        (
            () =>
            {
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
            },
            err => 
            {
                alert('Something went wrong while logging out: ' + err.message);
            }
        )
    }

    // Signup Method
    signup(firstName: string, lastName: string, email: string, password: string)
    {
        this.fireAuth.createUserWithEmailAndPassword(email, password).then
        (
            () => 
            {
                alert('Signing up successfully')

                this.data.addUserData(firstName, lastName, email);
            },
            err => 
            {
                alert('Something went wrong while signing up: ' + err.message);
                this.router.navigate(['/signup']);
            }
        )
    }

    // Forgot password Method
    forgotPassword(email: string)
    {
        this.fireAuth.sendPasswordResetEmail(email).then
        (
            () => 
            {
                alert('Sending reset email')
                this.router.navigate(['/login'])
            },
            err => 
            {
                alert('Something went wrong while sending reset email: ' + err.message);
                this.router.navigate(['/forgotpassword']);
            }
        )
    }
}
