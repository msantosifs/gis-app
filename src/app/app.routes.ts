import {Routes} from '@angular/router';
import {CityComponent} from "./components/city/city.component";
import {FindLocationComponent} from "./components/location-finder/location-finder.component";

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
    component: FindLocationComponent // replace LocateComponent with actual component name
  },
  /*
  {
    path: 'about',
    component: AboutComponent // replace AboutComponent with actual component name
  },*/
  {
    path: '',
    redirectTo: '/cities',
    pathMatch: 'full'
  },
];
