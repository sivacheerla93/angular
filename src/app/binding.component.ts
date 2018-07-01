import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})
export class BindingComponent {
    title: string = "Bindings Concept";
    message: string = "Hello Angular";

    GetDate(): string {
        return new Date().toString();
    }

    isBright(): boolean {
        var d = new Date();

        if (d.getHours() > 10)
            return true;
        else
            return false;
    }

    keyPressed(data) {
        console.log(data);
    }
}