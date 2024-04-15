import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { selectCartState } from '../../selectors/cart.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  
}
