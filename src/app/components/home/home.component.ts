import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component
({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
    firstName: string = this.constants.firstName

    constructor(private constants: ConstantsService) 
    {
    }

    ngOnInit(): void {}
}
