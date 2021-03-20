import {createAction, props} from '@ngrx/store';
import {Rooting} from '../../model/rooting';

export const changeRoot = createAction(
  '[Rooting] Change',
  props<{root: Rooting}>()
);




