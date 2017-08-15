import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service.js';
import { ToastrService } from '../common/toastr.service';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events:any[];
    constructor(private eventService:EventService, private toastr:ToastrService) { 
    }

    ngOnInit() { 
      this.events = this.eventService.getEvents();
    }
    handleThumbnailClick(name){
      this.toastr.success('This alert with: '+ name, 'Success');
    }
}

