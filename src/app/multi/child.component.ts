import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'st-child',
    template: `<h2>{{message}}</h2> 
    <button (click)="selected(message)">Select</button> 
    `,
})
export class ChildComponent implements OnInit {
    @Input() message: string;
    @Output() selectedMessage = new EventEmitter<string>();


    ngOnInit() {
        console.log("Message: " + this.message );
    }

    selected() {
        //raise event and pass parameter to event handling
        this.selectedMessage.emit(this.message);
    }
}