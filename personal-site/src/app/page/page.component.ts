import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NavbarState} from '../store/reducer/navbar.reducer';
import {selectNavbarIsOpen} from '../store/selector/navbar.selectors';
import {closeNavbar, openNavbar} from '../store/action/navbar.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  isNavbarOpen = true;

  constructor(private store: Store<NavbarState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectNavbarIsOpen)).subscribe(isOpen => this.isNavbarOpen = isOpen);
  }

  changeState(): void {
    if (this.isNavbarOpen) {
      this.store.dispatch(closeNavbar());
    } else {
      this.store.dispatch(openNavbar());
    }
  }

}
