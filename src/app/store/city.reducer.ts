import {createReducer, on} from '@ngrx/store';
import * as CityActions from './city.actions';
import {City} from '../models/city.model';

export interface State {
  cities: City[];
  selectedCity?: City;
  error: any;
}

export const initialState: State = {
  cities: [],
  error: null,
  selectedCity: undefined,
};

export const cityReducer = createReducer(
  initialState,
  on(CityActions.loadCitiesSuccess, (state, { cities }) => ({ ...state, cities })),
  on(CityActions.loadCitiesFailure, (state, { error }) => ({ ...state, error })),
  on(CityActions.selectCity, (state, { city }) => ({ ...state, selectedCity: city })),
);
