import { createAction } from '@ngrx/store';
import { vehicleProps } from 'src/app/models/vehicle.constants';

export interface ImageState {
  imageUrl: string;
}

export const initialImageState: ImageState = {
  imageUrl: vehicleProps[0].image,
};

export const setImageUrl = createAction('[Image] Set Image URL', (imageUrl: string) => ({ imageUrl }));