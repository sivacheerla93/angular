import { NgModule } from '@angular/core';
import { OneComponent } from './one.component';
import { TwoComponent } from './two.component';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@NgModule({
    declarations: [ParentComponent, ChildComponent],
    imports: [BrowserModule],
    exports: [],
    providers: [],
    bootstrap: [ParentComponent]
})
export class CompoModule { }