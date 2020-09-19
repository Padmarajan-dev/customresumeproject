import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  noUsers:any;
  noTemplates:any;
  constructor(private dashservice:DashboardServiceService) { }

  ngOnInit() {
    this.dashservice.getlogginedcount().subscribe((res)=>{
      this.noUsers = res.length;
    });
    this.dashservice.gettemplatecount().subscribe((res)=>{
      this.noTemplates=res.length;
    });
  
  }

}
