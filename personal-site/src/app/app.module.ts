import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {navbarFeatureKey, reducerNavbar} from './store/reducer/navbar.reducer';
import { PageComponent } from './page/page.component';
import { CarrerComponent } from './carrer/carrer.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageComponent,
    CarrerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(navbarFeatureKey, reducerNavbar),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
