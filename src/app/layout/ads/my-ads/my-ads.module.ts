import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAdsRoutingModule } from './my-ads-routing.module';
import { MyAdsComponent } from './my-ads.component';

@NgModule({
    imports: [CommonModule, MyAdsRoutingModule],
    declarations: [MyAdsComponent]
})
export class MyAdsModule {}
