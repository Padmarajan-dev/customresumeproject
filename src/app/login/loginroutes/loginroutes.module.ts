import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {SigninComponent} from '../signin/signin.component';
export const route:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'signin',
    component:SigninComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //RouterModule.forChild(route)
  ]
})
export class LoginroutesModule { }
