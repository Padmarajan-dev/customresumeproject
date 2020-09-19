import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-template-performance',
  templateUrl: './template-performance.component.html',
  styleUrls: ['./template-performance.component.scss']
})
export class TemplatePerformanceComponent implements OnInit {
  
  constructor(private dashservice:DashboardServiceService) { }
    public doughnutChartLabels: Label[]=[];
    public doughnutChartData: MultiDataSet = [];
    public doughnutChartType: ChartType = 'pie';
    public color:any=[
      {backgroundColor:["#6A89CC","#badc57"]}
    ];
  ngOnInit() {
    this.dashservice.gettemplatecount().subscribe((res)=>{
      for(var i=0;i<res.length;i++)
      {
      this.doughnutChartLabels[i]=res[i];
      }
    });
    this.dashservice.getusedtempcount().subscribe((res)=>{
      for(var i=0;i<res.length;i++)
      {
        this.doughnutChartData[i]=res[i];
      }
    })
  }

}
