import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UseLogComponent } from './use-log.component';
import { LogService } from './log.service';
import { UseLog2Component } from './use-log2.component';

@NgModule({
    declarations: [UseLogComponent, UseLog2Component],
    imports: [BrowserModule],
    exports: [],
    providers: [LogService],
    bootstrap: [UseLogComponent, UseLog2Component]
})
export class ServiceModModule { }