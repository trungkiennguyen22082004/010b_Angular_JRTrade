import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ConstantsService } from './constants.service';
import { Router } from '@angular/router';

@Injectable
({
    providedIn: 'root'
})

export class DataService 
{
    constructor(private constants: ConstantsService, private fireAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) { }

    getUserData()
    {   
        try
        {
            this.fireAuth.onAuthStateChanged
            (
                async (user) =>
                {
                    if (user)
                    {
                        this.constants.userID = user.uid;
                        console.log("User ID: " + this.constants.userID);
                    }
                    else
                    {
                        this.constants.userID = "";
                        console.log("User ID: " + this.constants.userID);
                    }

                    const userDocument = this.firestore.collection("users").doc(this.constants.userID);
                    const documentSnapshot = await userDocument.get().toPromise();
        
                    this.constants.firstName = documentSnapshot?.get("firstName") || "";
                    this.constants.lastName = documentSnapshot?.get("lastName") || "";
                    this.constants.email = documentSnapshot?.get("email") || "";
                    this.constants.avatarID = (documentSnapshot?.get("avatarID") || 0) as number;
                    this.constants.balanceInUSD = (documentSnapshot?.get("balance") || 0) as number;

                    console.log("Firebase connecting successfully: \n    - First Name: " + this.constants.firstName + "\n    - Last Name: " + this.constants.lastName + "\n    - Email: " + this.constants.email + "\n    - Avatar ID: " + this.constants.avatarID + "\n    - Balance (USD): " + this.constants.balanceInUSD);

                    localStorage.setItem('token', 'true');
                    this.router.navigate(['/home']);
                }
            );
        }
        catch (error) 
        {
            console.error("Firestore connecting Users Database error", error);
        }
    }

    addUserData(firstName: string, lastName: string, email: string)
    {
        try
        {
            this.fireAuth.onAuthStateChanged
            (
                async (user) =>
                {
                    if (user)
                    {
                        this.constants.userID = user.uid;
                        console.log("User ID: " + this.constants.userID);
                    }
                    else
                    {
                        this.constants.userID = "";
                        console.log("User ID: " + this.constants.userID);
                    }

                    const userCollection = this.firestore.collection("users").doc(this.constants.userID).set
                    ({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        avatarID: 1,
                        balance: 0.00,
                    }).then
                    (
                        () => 
                        {
                            console.log("Document successfully written!");
                        }
                    );

                    this.router.navigate(['/login']);
                }
            );
        }
        catch (error) 
        {
            console.error("Firestore connecting Users Database error", error);
        }
    }
}
