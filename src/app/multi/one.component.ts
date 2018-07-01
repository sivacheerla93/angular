import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-one',
    template: `
    <h1><u>The following data is inside the One Componet</u></h1>
    <p></p>
    <st-two></st-two>
    `,
})
export class OneComponent {
}