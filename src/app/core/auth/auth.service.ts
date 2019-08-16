import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'; //RxJS -> Reactive Extensions for JavaScript. 

import { UserService } from './../user/user.service';
import { environment } from './../../../environments/environment'

const API_URL = environment.apiVetwebUrl;//Constante de acordo com o ambiente

//Será uma instancia única para a aplicação inteira
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {

   

  }

}
