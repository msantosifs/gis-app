import {Component} from '@angular/core';
import {City} from '../../models/city.model';
import {AsyncPipe, JsonPipe, NgForOf} from "@angular/common";
import {MapComponent} from "../map-container/map-container.component";
import {Store} from "@ngrx/store";
import {selectedCity} from "../../store/city.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-city',
  standalone: true,
  templateUrl: './city.component.html',
  imports: [
    NgForOf,
    MapComponent,
    AsyncPipe,
    JsonPipe
  ],
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
  city$: Observable<City | undefined> = this.store.select(selectedCity);

  constructor(private store: Store) {
  }
}
