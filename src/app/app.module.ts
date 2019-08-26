import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatCardModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ResourcesModule } from './resources';
import { StatusChipModule } from './features/status-chip';
import { LineChartModule } from './features/line-chart';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,

    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 100
    }),

    ResourcesModule,
    StatusChipModule,
    LineChartModule
  ]
})
export class AppModule { }
