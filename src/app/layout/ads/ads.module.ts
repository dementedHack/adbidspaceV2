import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing-module.module';
import { AdsComponent } from './ads.component';

@NgModule({
  imports: [
    CommonModule,
    AdsRoutingModule
  ],
  declarations: [AdsComponent]
})
export class AdsModule { }
