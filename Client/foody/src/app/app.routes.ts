import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodComponent } from './components/food/food.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'food', component: FoodComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'order-placed', component: OrderPlacedComponent }
];
