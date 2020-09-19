import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Color } from 'ng-chartjs';
import { DashboardServiceService } from '../dashboard-service.service';
@Component({
  selector: 'app-users-count',
  templateUrl: './users-count.component.html',
  styleUrls: ['./users-count.component.scss']
})
export class UsersCountComponent implements OnInit {
  constructor(private dashservice:DashboardServiceService) { }
  printable:any;
  barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      yAxes:[{
        ticks:{
          suggestedMax:100,
          suggestedMin:0
        },
      }],
      xAxes:[{
        gridLines:{
          display:false
        }
      }]
    }
  };
  barChartLabels: Label[] = ['JAN', 'FEB', 'MAR', 'APR','MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC'];
  barChartType:ChartType = 'bar';
  barChartLegend = true;
  barChartColor:Color[]=[
    {backgroundColor:"#25CCF7"}
  ];
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {label:'users',borderColor:'blue'}
  ];
  ngOnInit() {
    var monlen = this.barChartLabels.length;
    this.dashservice.getlogginedcount().subscribe((res)=>{
      for(var i = 0;i<res.length;i++)
      {
        for(var j = 0;j<monlen;j++)
        {
        if(res[i].mname===this.barChartLabels[j])
        {
          this.barChartData[0].data[j]=Number(res[i].cid);
        }
      }
  
    }
});
console.log(this.barChartData);
}
}
