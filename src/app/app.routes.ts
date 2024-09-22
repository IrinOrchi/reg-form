import { Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component'; // Update the path
import { CompanyInfoComponent } from './components/company-info/company-info.component';

export const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent }, 
  { path: 'company-info', component: CompanyInfoComponent  },
  { path: '', redirectTo: '/create-account', pathMatch: 'full' }, 
];
