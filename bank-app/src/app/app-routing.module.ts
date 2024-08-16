import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'signup', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) }, 
  { path: 'home', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule) }, 
  { path: 'accounts', loadChildren: () => import('./finance/accounts/accounts.module').then(m => m.AccountsModule) }, 
  { path: 'transactions', loadChildren: () => import('./finance/transactions/transactions.module').then(m => m.TransactionsModule) }, 
  { path: 'dashboard', loadChildren: () => import('./user/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: 'profile', loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfileModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 