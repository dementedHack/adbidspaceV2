import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRealEstateRoutingModule } from './my-real-estate-routing.module';
import { MyRealEstateComponent } from './my-real-estate.component';

@NgModule({
    imports: [CommonModule, MyRealEstateRoutingModule],
    declarations: [MyRealEstateComponent]
})
export class MyRealEstateModule {}
