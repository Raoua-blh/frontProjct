import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';
import { EventsComponent } from './events/events.component';
import { FeedsComponent } from './feeds/feeds.component';
import { GalaxiesComponent } from './galaxies/galaxies.component';

const routes: Routes = [
  {
    path: "events", component:EventsComponent 
    },
  { 
     path: "attributes", component:AttributesComponent 
    },
  {  path: "feeds", component:FeedsComponent 
     },
  {  path: "galaxies", component:GalaxiesComponent
     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
