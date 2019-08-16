import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    fromUrl: string;
    loginForm: FormGroup;

    constructor(private route: Router) { }

    ngOnInit(): void {
 
    }

    login() {

        this.route.navigate(['home']);

    }


}