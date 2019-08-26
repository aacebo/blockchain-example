import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LineChartModule } from './features/line-chart';
import { StatusChipModule } from './features/status-chip';
import { TransactionService, TransactionServiceStub } from './resources/transaction';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: TransactionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NoopAnimationsModule,

        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,

        LineChartModule,
        StatusChipModule
      ],
      providers: [{
        provide: TransactionService,
        useClass: TransactionServiceStub
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get<TransactionService>(TransactionService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('subscribe', () => {
    it('should subscribe', () => {
      const spy = spyOn(service, 'subscribe');
      component.subscribe();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('unsubscribe', () => {
    it('should unsubscribe', () => {
      const spy = spyOn(service, 'unsubscribe');
      component.unsubscribe();
      expect(spy).toHaveBeenCalled();
    });
  });
});
