import { createAction, props } from '@ngrx/store';
import { City } from '../models/city.model';

export const loadCities = createAction('[City] Load Cities');
export const loadCitiesSuccess = createAction('[City] Load Cities Success', props<{ cities: City[] }>());
export const loadCitiesFailure = createAction('[City] Load Cities Failure', props<{ error: any }>());

export const selectCity = createAction('[City] Select city', props<{ city: City }>());
