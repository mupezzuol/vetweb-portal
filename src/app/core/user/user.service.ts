import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode'//Importanto tudo (*) de jwt-decode e dando um alias para ele as (jtw_decode)

import { TokenService } from './../token/token.service';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService){
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        
        // aqui a chamada 'jwt_decode' que descriptografa nosso token, onde nele teremos informações de usuário
        //Como já sabemos as informações que do Payload do token que descriptografamos, nós criamos uma interface de usuário, e na chamada nós já fazemos um CAST de User (as)
        const user = jwt_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }
    
    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName(){
        return this.userName;
    }

}