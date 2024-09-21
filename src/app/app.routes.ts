import { Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component'; // Update the path

export const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent }, 
  { path: '', redirectTo: '/create-account', pathMatch: 'full' }, 
];
