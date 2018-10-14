import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRealEstateComponent } from './my-real-estate.component';

const routes: Routes = [
    {
        path: '',
        component: MyRealEstateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyRealEstateRoutingModule {}
