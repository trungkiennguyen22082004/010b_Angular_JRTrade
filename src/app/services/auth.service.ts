import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable(
{
    providedIn: 'root'
})
export class AuthService 
{
    constructor(private fireAuth: AngularFireAuth, private router: Router) { }

    // Login Method
    login(email: string, password: string)
    {
        this.fireAuth.signInWithEmailAndPassword(email, password).then
        ( 
            () =>
            {
                localStorage.setItem('token', 'true');
                this.router.navigate(['/home']);
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
    signup(email: string, password: string)
    {
        this.fireAuth.createUserWithEmailAndPassword(email, password).then
        (
            () => 
            {
                alert('Signing up successfully')
                this.router.navigate(['/login'])
            },
            err => 
            {
                alert('Something went wrong while signing up: ' + err.message);
                this.router.navigate(['/signup']);
            }
        )
    }
}
