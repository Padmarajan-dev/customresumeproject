import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumetopdetailsComponent } from './resumetopdetails/resumetopdetails.component';
import { ResumeaboutsdetailsComponent } from './resumeaboutsdetails/resumeaboutsdetails.component'
import {Routes,RouterModule} from '@angular/router'
import { ResumeportfoliodetailsComponent } from './resumeportfoliodetails/resumeportfoliodetails.component';
import { SkillsdetailsformComponent } from './skillsdetailsform/skillsdetailsform.component';
import {ResumesociallinksdetailsComponent} from './resumesociallinksdetails/resumesociallinksdetails.component';
import {ResumecarrierdetailsComponent} from './resumecarrierdetails/resumecarrierdetails.component'
import { CandeactivateguardResumetopdetailsService } from './formrouteguards/deactivate_routeguards/candeactivateguard-resumetopdetails.service';
import { CanactivateguardResumetopdetailsServiceService } from './formrouteguards/activate_routeguards/canactivateguard-resumetopdetails-service.service';
import { CandeactivateguardAboutusdetailsServiceService } from './formrouteguards/deactivate_routeguards/candeactivateguard-aboutusdetails-service.service';
import { CandeactivateguardSkillsdetailsServiceService } from './formrouteguards/deactivate_routeguards/candeactivateguard-skillsdetails-service.service';
import { CandeactivateguardPortfoliodetailsServiceService } from './formrouteguards/deactivate_routeguards/candeactivateguard-portfoliodetails-service.service';
import { CandeactivateguardCarrierdetailsServiceService} from './formrouteguards/deactivate_routeguards/candeactivateguard-carrierdetails-service.service';
export const resumetopdetailsroute:Routes=[
    {
        path:'',
        component:ResumetopdetailsComponent,
        canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'update/about',
      component:ResumeaboutsdetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]

    },
    {
      path:'update/portfolio',
      component:ResumeportfoliodetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'update/skills',
      component:SkillsdetailsformComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'update/sociallinks',
      component:ResumesociallinksdetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'update/carrier',
      component:ResumecarrierdetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'portfolio',
      component:ResumeportfoliodetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'about',
      component:ResumeaboutsdetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'skills',
      component:SkillsdetailsformComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'sociallinks',
      component:ResumesociallinksdetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    },
    {
      path:'carrier',
      component:ResumecarrierdetailsComponent,
      canActivate:[CanactivateguardResumetopdetailsServiceService]
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(resumetopdetailsroute)
  ]
})
export class ResumedetailsRouterModule {
  resumeid:number;
 }