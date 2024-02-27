import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CityService } from '../services/city.service';
import * as cityActions from './city.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CityEffects {

  loadCities$ = createEffect(() => this.actions$.pipe(
    ofType(cityActions.loadCities),
    mergeMap(() => this.cityService.getCities().pipe(
      map(cities => cityActions.loadCitiesSuccess({ cities })),
      catchError(error => of(cityActions.loadCitiesFailure({ error })))
    ))
  ));

  constructor(private actions$: Actions, private cityService: CityService) { }
}
