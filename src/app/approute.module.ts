import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates/templates.component';
import { HomeComponent } from './home.component';
import { AdminrouteguardService } from './guards/adminrouteguard.service';
export const approutes:Routes=[  
{
  path:'dashboard',
  loadChildren:'./dashboard/dashboard.module#DashboardModule'
}, 
{
  path:'home',
  component:HomeComponent
},
{
  path:'',
  redirectTo:'templates',
  pathMatch:'full'
},
{
path:'templates',
component:TemplatesComponent
},
{
path:'users',
loadChildren:'./login/login.module#LoginModule'
},
{
  path:'admin',
  loadChildren:'./admin/admin.module#AdminModule',
  canActivate:[AdminrouteguardService]
},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class ApprouteModule { }
