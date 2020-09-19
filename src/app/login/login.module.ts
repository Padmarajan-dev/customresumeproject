import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {RouterModule, Routes} from '@angular/router';
import {route} from './loginroutes/loginroutes.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ResumesavedataService} from '../resumesavedata.service'
@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers:[ResumesavedataService]
})
export class LoginModule { }
