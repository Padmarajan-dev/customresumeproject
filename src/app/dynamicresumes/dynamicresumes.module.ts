import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ResumedetailsService} from './resumedetails.service';
import { dynamicResume1Component } from './dynamicresume1/dynamicresume1.component';
import { Dynamicresume2Component } from './dynamicresume2/dynamicresume2.component';
import { Dynamicresume3Component } from './dynamicresume3/dynamicresume3.component';
import { RatingModule } from 'ng-starrating';
import { AlertsModule } from 'angular-alert-module';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { AlertModule } from 'ngx-alerts';
@NgModule({
  declarations: [dynamicResume1Component, Dynamicresume2Component, Dynamicresume3Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RatingModule,
  ],
  providers:[ResumedetailsService],
  exports:[dynamicResume1Component]
})
export class dynamicResume1Module { }
