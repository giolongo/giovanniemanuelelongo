import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NavbarState} from '../store/reducer/navbar.reducer';
import {selectNavbarIsOpen} from '../store/selector/navbar.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = true;

  constructor(private store: Store<NavbarState>) {
    this.store.pipe(select(selectNavbarIsOpen)).subscribe(isOpen => this.isOpen = isOpen);
  }

  ngOnInit(): void {
  }

}
