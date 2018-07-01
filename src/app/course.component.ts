import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-course',
    templateUrl: './course.component.html'
})
export class CourseComponent {
    title: string = 'Angular 4';
    duration: number = 12;
    fee: number = 2000;
    bestFee: number;
    topics: string[] = ["Building Blocks", "Data Binding", "Forms", "Ajax"];
    message: string;

    showFee() {
        this.bestFee = this.fee * 0.90;
    }

    addTopic(topic: string): void {
        this.message = "";
        if (topic != null && topic.trim().length > 0)
            this.topics.push(topic);
        else
            this.message = "Sorry! Topic not valid";
    }

    deleteTopic(topic: string): void {
        // finf position of topic in topics array
        var found: boolean = false;
        for (var i = 0; i < this.topics.length; i++) {
            if (this.topics[i] === topic) {
                this.topics.splice(i, 1); // remove element at ith position
                found = true;
                break;
            }
        }
        if (!found)
            alert("Sorry! Topic not found!")
    }
}