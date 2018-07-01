import { Component, OnInit, Optional } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'st-log',
    template: `<button (click) = "showToday()">Show Today</button>`,

    // providers : [LogService] //This is at component level
})
export class UseLogComponent {

    // Dependency Injection
    constructor(private log: LogService) { }

    showToday() {
        this.log.log(new Date().toString());
    }

    ngOnInit() {
        this.log.name = "Log Service";
        this.log.log("This is to test!");
        this.log.error("This is an error!");
    }
}