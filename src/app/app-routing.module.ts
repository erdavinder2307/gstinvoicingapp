import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), },
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), },

  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
