import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { DetailsComponent } from './details.component';
import { AddDeactivateGuard } from './add-deactivate.guard';
import { AddActivateGuard } from './add-activate.guard';

const appRoutes: Routes = [
    { path: 'list', component: ListComponent },
    {
        path: 'add', component: AddComponent,
        canDeactivate: [AddDeactivateGuard], canActivate: [AddActivateGuard]
    },
    { path: 'details/:code', component: DetailsComponent },
    { path: '', component: ListComponent, pathMatch: 'full' },
    { path: '**', component: ListComponent }
];

@NgModule({
    declarations: [MainComponent, ListComponent, AddComponent, DetailsComponent],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    exports: [],
    providers: [AddDeactivateGuard, AddActivateGuard],
    bootstrap: [MainComponent],
})
export class RoutesModule { }