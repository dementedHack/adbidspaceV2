import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateRoutingModule } from './real-estate-routing.module';
import { RealEstateComponent } from './real-estate.component';

@NgModule({
  imports: [
    CommonModule,
    RealEstateRoutingModule
  ],
  declarations: [RealEstateComponent]
})
export class RealEstateModule { }
