import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarrerComponent} from './carrer/carrer.component';

const routes: Routes = [
  { path: 'carrer', component: CarrerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
