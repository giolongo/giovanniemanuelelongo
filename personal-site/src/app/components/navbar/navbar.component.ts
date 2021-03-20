import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NavbarState} from '../../store/reducer/navbar.reducer';
import {selectNavbarIsOpen} from '../../store/selector/navbar.selectors';
import {selectRooting} from '../../store/selector/rooting.selectors';
import {Rooting} from '../../model/rooting';
import {Router} from '@angular/router';
import {RootingState} from '../../store/reducer/rooting.reducer';
import {changeRoot} from '../../store/action/rooting.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = true;
  rootEnum = Rooting;
  rootSelected = '';

  constructor(private navStore: Store<NavbarState>,
              private rootState: Store<RootingState>,
              public router: Router) {
    this.navStore.pipe(select(selectNavbarIsOpen)).subscribe(isOpen => this.isOpen = isOpen);
    this.rootState.pipe(select(selectRooting)).subscribe(rooting => this.rootSelected = rooting);
  }

  ngOnInit(): void {
  }

  changeRoute(root: Rooting): void{
    this.router.navigate([root]);
    this.rootState.dispatch(changeRoot({root}));
  }

}
