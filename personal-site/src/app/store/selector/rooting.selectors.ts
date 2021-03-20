import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRooting from '../reducer/rooting.reducer';

export const selectRootingState = createFeatureSelector<fromRooting.RootingState>(
  fromRooting.rootingFeatureKey,
);

export const selectRooting = createSelector(
  selectRootingState,
  (state: fromRooting.RootingState) => state.rooting
);
