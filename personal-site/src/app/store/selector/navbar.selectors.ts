import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromNavbar from '../reducer/navbar.reducer';

export const selectNavbarState = createFeatureSelector<fromNavbar.NavbarState>(
  fromNavbar.navbarFeatureKey,
);

export const selectNavbarIsOpen = createSelector(
  selectNavbarState,
  (state: fromNavbar.NavbarState) => state.navbar.isOpen
);
