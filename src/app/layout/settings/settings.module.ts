import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NotificationComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent,
                 NotificationComponent]
})
export class SettingsModule { }
