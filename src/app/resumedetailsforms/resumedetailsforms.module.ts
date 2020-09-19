import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumetopdetailsComponent } from './resumetopdetails/resumetopdetails.component';
import { ResumedetailsRouterModule} from './resumedetails.route';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ResumesavedataService } from '../resumesavedata.service';
import { ResumeaboutsdetailsComponent } from './resumeaboutsdetails/resumeaboutsdetails.component'
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import {AutosizeModule} from 'ngx-autosize';
import {TextFieldModule} from '@angular/cdk/text-field';
import { ResumeportfoliodetailsComponent } from './resumeportfoliodetails/resumeportfoliodetails.component';
import { SkillsdetailsformComponent } from './skillsdetailsform/skillsdetailsform.component';
import { ResumesociallinksdetailsComponent } from './resumesociallinksdetails/resumesociallinksdetails.component';
import { ResumecarrierdetailsComponent } from './resumecarrierdetails/resumecarrierdetails.component';
import { CommonfunctionsserviceService } from './commonfunctionsservice.service';
import { CandeactivateguardResumetopdetailsService } from './formrouteguards/deactivate_routeguards/candeactivateguard-resumetopdetails.service';
import { CanactivateguardResumetopdetailsServiceService } from './formrouteguards/activate_routeguards/canactivateguard-resumetopdetails-service.service';
import { CandeactivateguardAboutusdetailsServiceService } from './formrouteguards/deactivate_routeguards/candeactivateguard-aboutusdetails-service.service';
import { CandeactivateguardSkillsdetailsServiceService } from './formrouteguards/deactivate_routeguards/candeactivateguard-skillsdetails-service.service';
import { CandeactivateguardPortfoliodetailsServiceService } from './formrouteguards/deactivate_routeguards/candeactivateguard-portfoliodetails-service.service';
import { CandeactivateguardCarrierdetailsServiceService} from './formrouteguards/deactivate_routeguards/candeactivateguard-carrierdetails-service.service';
@NgModule({
  declarations: [ResumetopdetailsComponent, ResumeaboutsdetailsComponent, ResumeportfoliodetailsComponent, SkillsdetailsformComponent, ResumesociallinksdetailsComponent, ResumecarrierdetailsComponent],
  imports: [
    CommonModule,
    ResumedetailsRouterModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    TextareaAutosizeModule,
    AutosizeModule,
    TextFieldModule
  ],
  providers:[ResumesavedataService,
  CommonfunctionsserviceService,
  CandeactivateguardResumetopdetailsService,
  CandeactivateguardAboutusdetailsServiceService,
  CandeactivateguardSkillsdetailsServiceService,
  CandeactivateguardCarrierdetailsServiceService,
  CandeactivateguardPortfoliodetailsServiceService,
  CanactivateguardResumetopdetailsServiceService,
  ]
})
export class ResumedetailsformsModule { }
