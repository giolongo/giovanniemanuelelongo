import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarrerComponent} from './components/carrer/carrer.component';
import {Rooting} from './model/rooting';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: Rooting.HOME, pathMatch: 'full' },
  { path: Rooting.HOME, component: HomeComponent },
  { path: Rooting.CARRER, component: CarrerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
