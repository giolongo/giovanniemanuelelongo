import {Action, createReducer, on} from '@ngrx/store';
import {Navbar} from '../../model/navbar';
import {closeNavbar, openNavbar} from '../action/navbar.actions';


export const navbarFeatureKey = 'navbar';

export interface NavbarState {
  navbar: Navbar;
}

export const initialState: NavbarState = {
  navbar: new Navbar()
};


export const navbarReducer = createReducer(
  initialState,
  on(closeNavbar, (state: NavbarState) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.navbar.isOpen = false;
    return newState;
  }),
  on(openNavbar, (state: NavbarState) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.navbar.isOpen = true;
    return newState;
  })
);

export function reducerNavbar(state: NavbarState | undefined, action: Action): any {
  return navbarReducer(state, action);
}



