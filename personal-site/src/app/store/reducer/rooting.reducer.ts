import {Action, createReducer, on} from '@ngrx/store';
import {changeRoot} from '../action/rooting.actions';
import {NavbarState} from './navbar.reducer';
import {Rooting} from '../../model/rooting';


export const rootingFeatureKey = 'rooting';

export interface RootingState {
  rooting: string;
}

export const initialState: RootingState = {
  rooting: Rooting.HOME
};


export const rootingReducer = createReducer(
  initialState,
  on(changeRoot, (state: RootingState, {root}) =>  ({...state, rooting: root}))
);

export function reducerRooting(state: RootingState | undefined, action: Action): any {
  return rootingReducer(state, action);
}



