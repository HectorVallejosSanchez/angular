import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './events/services/event.service.js';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule // <-- import the FormsModule before binding with [(ngModel)]
    ],
    exports: [],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavComponent,
        EventDetailsComponent
    ],
    bootstrap: [
        EventsAppComponent
    ],
    providers: [
        EventService,
        ToastrService
    ],
})
export class AppModule { }
