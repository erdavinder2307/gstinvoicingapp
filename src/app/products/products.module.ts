import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes = [
  { path: '', component: ProductsComponent, canActivate: [AuthGuard], },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard], },
  { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard], }

];

@NgModule({
  declarations: [ProductsComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
