import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { NewEventDialgComponent } from '../new-event-dialg/new-event-dialg.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

 
  constructor(private dialog : MatDialog ){

  }
    openDialog() {
      this.dialog.open(NewEventDialgComponent, {
        width:'40%'
      });
    }
  ngOnInit(): void {
  }

}
