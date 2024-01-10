import { Component,OnInit } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";



@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})

export class UsageComponent implements OnInit {

  screenWidth:number = 0;
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 100, 320, 800, 781, 500, 1200, 1400 ],
        label: 'Usage analytics',
        fill: true,
        tension: 0.5,
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63,81,181,0.25)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true; 
  
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];



  constructor(){

  }

  ngOnInit(): void {
    
    
    let usageContainer = document.getElementsByClassName('usageContainer') ;


  }

}
