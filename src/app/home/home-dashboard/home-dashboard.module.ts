import { HomeDashboardComponent } from './home-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HomeDashboardComponent
    ],
    imports: [ CommonModule ],
    exports: [
        HomeDashboardComponent
    ],
    providers: [],
})
export class HomeDashboardModule {}