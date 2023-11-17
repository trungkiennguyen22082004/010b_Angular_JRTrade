import { Injectable } from '@angular/core';

@Injectable
({
    providedIn: 'root'
})

export class ConstantsService 
{
    constructor() { }

    userID: string = "";
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    avatarID: number = 1;
    balanceInUSD: number = 0.00;
}
