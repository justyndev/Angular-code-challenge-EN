import { createAction } from "@ngrx/store";

export interface VehicleFormState {
    selectedType: string,
    selectedSubtype: string,
    licensePlate: string
  }

export const submitVehicleForm = createAction('[Form Submit] Vehicle Form', (vehicleForm: VehicleFormState) => ({vehicleForm}))