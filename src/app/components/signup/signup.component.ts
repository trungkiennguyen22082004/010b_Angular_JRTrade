import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component
({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit
{
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";

    constructor(private auth : AuthService) { }

    ngOnInit(): void {}

    signup()
    {
        if (this.firstName == "") 
        {
            alert("Please enter your first name");
            return;
        }

        if (this.lastName == "") 
        {
            alert("Please enter your last name");
            return;
        }

        if (this.email == "") 
        {
            alert("Please enter email");
            return;
        }
      
        if(this.password == '') 
        {
            alert("Please enter password");
            return;
        }
      
        this.auth.signup(this.firstName, this.lastName, this.email, this.password);

        this.email = "";
        this.password = ""; 
        this.firstName = "";
        this.lastName = "";
    }
}
