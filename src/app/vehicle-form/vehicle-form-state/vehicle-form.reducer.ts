import { createReducer, on } from '@ngrx/store';
import { VehicleFormState, submitVehicleForm } from './vehicle-form.action';

export const initialVehicleFormState: VehicleFormState = {
    selectedType: 'Hatchback',
    selectedSubtype: 'All-road',
    licensePlate: ''
  };


export const vehicleFormReducer = createReducer(
    initialVehicleFormState,
    on(submitVehicleForm, (state, { vehicleForm }) => ({ ...state, ...vehicleForm }))
  );