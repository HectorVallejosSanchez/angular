import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '09/03/2016',
        time: '10:00 am',
        price: 499.00,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Lima',
            country: 'Peru'
        }
    }
    constructor() { }

    ngOnInit() { }
   
}

