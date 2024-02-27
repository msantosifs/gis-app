import {Routes} from '@angular/router';
import {CityComponent} from "./components/city/city.component";
import {FindLocationComponent} from "./components/location-finder/location-finder.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {
    path: 'cities',
    children: [
      {
        path: 'city',
        component: CityComponent
      }
    ],
  },
  {
    path: 'locate',
    component: FindLocationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // wildcard route
  {
    path: '**',
    redirectTo: 'home'
  },
];
