import { Component, OnInit, Input } from '@angular/core';
import { NgSwitchCase } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent implements OnInit {
    @Input() event: any;
    //SomeProperty: any = "some value";
    constructor() { }

    ngOnInit() { }

    /*logFoo(){
        console.log('foo');
    }*/
    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        return []
    }
}