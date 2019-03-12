import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    })
  ]
})
export class DashboardModule { }
