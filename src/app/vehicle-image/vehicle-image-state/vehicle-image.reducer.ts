import { createReducer, on } from '@ngrx/store';
import { initialImageState, setImageUrl } from './vehicle-image.actions';

export const imageReducer = createReducer(
    initialImageState,
    on(setImageUrl, (state, { imageUrl }) => ({ ...state, imageUrl }))
  );