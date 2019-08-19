import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserService } from './../user/user.service';
import { environment } from './../../../environments/environment'

const API_URL = environment.apiVetwebUrl;
const API_URL_CONTEXT = environment.apiVetwebContext;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }


  authenticate(email: string, password: string) {
    return this.http
      .post(API_URL_CONTEXT + '/auth', { email, password }, { observe: 'response' });//URL + Object + Observe (utilizado para expor os valores do Headers etc...)
      //.pipe(tap(res => {
        //const authToken = res.headers.get('x-access-token');//x-access-token -> é o 'key' que vem em 'headers' da requisição. Nele irá vir nosso token
        //this.userService.setToken(authToken);
        //console.log(`User with e-mail ${email} authenticated with token ${authToken}`)
      //}))
  }

}
