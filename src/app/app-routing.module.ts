import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDashboardComponent } from './home/home-dashboard/home-dashboard.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
  },
  {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
  },


  {
    path: "home",
    component: HomeDashboardComponent,
    data: { 
        title: 'Home'
    }
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
