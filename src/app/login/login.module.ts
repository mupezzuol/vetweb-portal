import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignInComponent } from './signin/signin.component';
import { LoginRoutingModule } from './login.rounting.module';
import { HttpClientModule } from '@angular/common/http';

//Para ser acesso via app.module não preciso usar o EXPORTS, pois não estamos acessando Template nem nada...
@NgModule({
    declarations: [
        SignInComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        LoginRoutingModule
    ]
})
export class LoginModule{

}