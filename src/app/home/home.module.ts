import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardModule } from './home-dashboard/home-dashboard.module';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        HomeDashboardModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}