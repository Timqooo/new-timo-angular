import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { CartComponent } from './cart/cart.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
    { path:'' , component: LibraryComponent },
    { path: 'cart', component: CartComponent},
    { path: 'add-book', component: AddBookComponent}
];
