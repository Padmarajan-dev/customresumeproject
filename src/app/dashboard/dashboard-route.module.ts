import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
export const router:Routes=[
{
  path:'',
  component:DashboardMainComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class DashboardRouteModule { }
