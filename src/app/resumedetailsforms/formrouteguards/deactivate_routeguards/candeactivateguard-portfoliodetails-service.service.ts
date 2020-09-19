import { Injectable } from '@angular/core';
import {CanDeactivate,Router} from '@angular/router';
import { ResumeportfoliodetailsComponent } from '../../resumeportfoliodetails/resumeportfoliodetails.component';
@Injectable({
  providedIn: 'root'
})
export class CandeactivateguardPortfoliodetailsServiceService implements CanDeactivate<ResumeportfoliodetailsComponent> {

  constructor(private route:Router) { }
  canDeactivate(component:ResumeportfoliodetailsComponent):boolean{
    if(component.portfolioform.dirty)
    {
    if(confirm("do You want Discard your changes?.if you disacard it you will doesn't  get a mail link of this resume template")==false)
    {
      this.route.navigate(['templates']);
    }

    }
    return true;
  }
}
