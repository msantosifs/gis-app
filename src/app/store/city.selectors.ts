import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './city.reducer';

export const selectCitiesState = createFeatureSelector<State>('cities');

export const selectAllCities = createSelector(
  selectCitiesState,
  (state: State) => state.cities
);

export const selectCityError = createSelector(
  selectCitiesState,
  (state: State) => state.error
);

export const selectedCity = createSelector(
  selectCitiesState,
  (state: State) => state.selectedCity
);
