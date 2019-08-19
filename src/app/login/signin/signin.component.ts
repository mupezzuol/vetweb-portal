import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../core/auth/auth.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    fromUrl: string;
    loginForm: FormGroup;

    constructor(
        private route: Router,
        private authService: AuthService) { }


    ngOnInit(): void {
 
    }



    login() {
        
        const email = "gabs@gmail.com";
        const password = "1234";



        this.authService.authenticate(email, password)
            .subscribe(
                () => {
                    console.log(`Usuário com e-mail ${email} autenticado com sucesso.`);
                    this.route.navigate(['home']);
                },
                err => {
                    console.log('ERRO DE AUTENTICAÇÃO: ' + err.message);
                    alert('Username or Password is incorrect!');
                });

    }


}