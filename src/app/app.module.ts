import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import {MatListModule} from '@angular/material/list';
import { AttributesComponent } from './attributes/attributes.component';
import { FeedsComponent } from './feeds/feeds.component';
import { GalaxiesComponent } from './galaxies/galaxies.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { NewEventDialgComponent } from './new-event-dialg/new-event-dialg.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatSelectModule} from '@angular/material/select'; 
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AttributesComponent,
    FeedsComponent,
    GalaxiesComponent,
    NewEventDialgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
