import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.rounting.module';
import { SignInComponent } from './signin/signin.component';

//Para ser acesso via app.module não preciso usar o EXPORTS, pois não estamos acessando Template nem nada...
@NgModule({
    declarations: [
        SignInComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        HomeRoutingModule
    ]
})
export class HomeModule{

}