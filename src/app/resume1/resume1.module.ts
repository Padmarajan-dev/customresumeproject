import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resume1Component } from './resume1/resume1.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ResumesavedataService } from '../resumesavedata.service';
import { Resume2Component } from './resume2/resume2.component';
import { Resume3Component } from './resume3/resume3.component';
@NgModule({
  declarations: [Resume1Component, Resume2Component, Resume3Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[Resume1Component],
  providers:[ResumesavedataService ]
})
export class Resume1Module { }
