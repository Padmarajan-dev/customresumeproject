import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartsModule } from 'ng2-charts';
import {DashboardRouteModule} from './dashboard-route.module';
import { UsersCountComponent } from './users-count/users-count.component';
import {TemplatePerformanceComponent} from './template-performance/template-performance.component';
@NgModule({
  declarations: [DashboardMainComponent, UsersCountComponent, TemplatePerformanceComponent],
  imports: [
    CommonModule,
    NgChartjsModule,
    DashboardRouteModule,
    ChartsModule
  ]
})
export class DashboardModule { }
