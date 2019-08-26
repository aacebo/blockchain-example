import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MultiSeries } from '@swimlane/ngx-charts';

import { epochToDate } from '../../core/utils';
import { ITransaction } from '../../resources/transaction';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent {
  @Input() data: ITransaction[] = [];

  get series(): MultiSeries {
    return [
      {
        name: 'Size',
        series: this.data.map(t => ({
          name: epochToDate(t.x.time).toLocaleString(),
          value: t.x.size
        }))
      },
      {
        name: 'VIN Size',
        series: this.data.map(t => ({
          name: epochToDate(t.x.time).toLocaleString(),
          value: t.x.vin_sz
        }))
      },
      {
        name: 'VOUT Size',
        series: this.data.map(t => ({
          name: epochToDate(t.x.time).toLocaleString(),
          value: t.x.vout_sz
        }))
      }
    ];
  }
}
