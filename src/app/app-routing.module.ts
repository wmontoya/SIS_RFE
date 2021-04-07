import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});