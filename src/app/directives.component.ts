import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-directives',
    templateUrl: './directives.component.html'
})
export class DirectivesComponent {
    title: string = "Directives Topic";
    offer: boolean = true;
    nums: number[] = [10, 20, 33, 233, 11];
}