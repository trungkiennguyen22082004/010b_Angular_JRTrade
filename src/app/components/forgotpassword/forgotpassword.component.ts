import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component
({
    selector: 'app-forgotpassword',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.css']
})

export class ForgotpasswordComponent implements OnInit
{
    email: string = "";

    constructor(private auth: AuthService) {}

    ngOnInit(): void {}

    forgotPassword()
    {
        if (this.email == "")
        {
            alert("Please enter email");
            return;
        }

        this.auth.forgotPassword(this.email);

        this.email;
    }
}
