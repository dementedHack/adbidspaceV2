import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { NotificationComponent } from './components';

@NgModule({
    imports: [CommonModule, InboxRoutingModule],
    declarations: [InboxComponent,
                   NotificationComponent]
})
export class InboxModule {}
