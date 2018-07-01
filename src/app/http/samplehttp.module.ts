import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BooksService } from './BooksService';
import { AddBookComponent } from './add-book.component';
import { WebBooksComponent } from './webbooks.component';




@NgModule({
    declarations: [WebBooksComponent, AddBookComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [BooksService],
    bootstrap: [WebBooksComponent, AddBookComponent]
})
export class SamplehttpModule { }
