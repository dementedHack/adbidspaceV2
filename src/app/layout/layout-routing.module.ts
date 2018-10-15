import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'real-estate', loadChildren: './real-estate/real-estate.module#RealEstateModule' },
            { path: 'ads', loadChildren: './ads/ads.module#AdsModule' },
            { path: 'my-ads', loadChildren: './ads/my-ads/my-ads.module#MyAdsModule' },
            { path: 'my-real-estate', loadChildren: './real-estate/my-real-estate/my-real-estate.module#MyRealEstateModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
