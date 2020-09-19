import { Injectable } from '@angular/core';
import {CanDeactivate,Router} from '@angular/router';
import { SkillsdetailsformComponent} from '../../skillsdetailsform/skillsdetailsform.component';
@Injectable({
  providedIn: 'root'
})
export class CandeactivateguardSkillsdetailsServiceService implements CanDeactivate<SkillsdetailsformComponent> {
  constructor(private route:Router) { }
  canDeactivate(component:SkillsdetailsformComponent):boolean{
    if(component.skillsformgroup.dirty)
    {
    if(confirm("do You want Discard your changes?.if you disacard it you will doesn't  get a mail link of this resume template")==false)
    {
      this.route.navigate(['templates']);
    }

    }
    return true;
  }
}
