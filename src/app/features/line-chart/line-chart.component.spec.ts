import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartModule } from '@swimlane/ngx-charts';

import { LineChartComponent } from './line-chart.component';
import { transactionMock } from '../../resources/transaction';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartComponent ],
      imports: [NoopAnimationsModule, LineChartModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;

    component.data = [
      transactionMock(),
      transactionMock(),
      transactionMock()
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
