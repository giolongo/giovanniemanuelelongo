import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectNavbarIsOpen} from './store/selector/navbar.selectors';
import {NavbarState} from './store/reducer/navbar.reducer';
import {openNavbar, closeNavbar} from './store/action/navbar.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-site';
}
