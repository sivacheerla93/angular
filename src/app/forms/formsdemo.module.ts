import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from './rlogin.component';

@NgModule({
    declarations: [ReactiveLoginComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    exports: [],
    providers: [],
    bootstrap: [ReactiveLoginComponent]
})
export class FormsdemoModule { }