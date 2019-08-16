import { LoginGuard } from '../core/auth/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard],
        children:[
            {
                path: '',
                component: SignInComponent,
                data: { 
                    title: 'Sign in'
                }
            }
        ]
    }
];

//forRoot -> Endereço localhost... a partir dele aceitar as rotas que está em array do tipo Routes
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}