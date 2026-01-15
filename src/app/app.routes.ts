import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductsComponent } from './products/products/products';
import { ProductDetailComponent } from './product-detail/product-detail/product-detail';
import { SingleviewListComponent } from './singleview-list/singleview-list/singleview-list';
import { CustomersComponent } from './customers/customers/customers';
import { Cart } from './cart/cart';
import { ContactComponent } from './contact/contact';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'product/:id', component: SingleviewListComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'cart', component: Cart },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];