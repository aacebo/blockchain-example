import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartModule as SwimlaneLineChartModule } from '@swimlane/ngx-charts';

import { LineChartComponent } from './line-chart.component';

@NgModule({
  declarations: [LineChartComponent],
  exports: [LineChartComponent],
  imports: [
    CommonModule,
    SwimlaneLineChartModule
  ]
})
export class LineChartModule { }
