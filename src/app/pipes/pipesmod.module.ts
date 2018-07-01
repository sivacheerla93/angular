import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PipesDemoComponent } from './pipesdemo.component';
import { Pipe } from '@angular/core/src/metadata/directives';
import { BracketsPipe } from './brackets.pipe';

@NgModule({
    declarations: [PipesDemoComponent, BracketsPipe],
    imports: [BrowserModule],
    exports: [],
    providers: [],
    bootstrap: [PipesDemoComponent]
})
export class PipesmodModule { }