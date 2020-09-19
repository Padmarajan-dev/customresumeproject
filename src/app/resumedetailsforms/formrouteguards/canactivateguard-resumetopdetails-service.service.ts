import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CanactivateguardResumetopdetailsServiceService  implements CanActivate{

  constructor(private route:Router) { }
  canActivate():boolean
  {
    if(localStorage.getItem('resumeid'))
    {
      return true;
    }else
    {
      this.route.navigate(['templates']);
    }
  }

    
}
