import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path:'' , component: LibraryComponent },
    { path: 'cart', component: CartComponent}
];
