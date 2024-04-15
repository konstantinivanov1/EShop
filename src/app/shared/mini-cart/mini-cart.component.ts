import { Component } from '@angular/core';
import { selectCartState } from '../../selectors/cart.selectors';
import { AppState } from '../../app.module';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrl: './mini-cart.component.scss'
})
export class MiniCartComponent {
  cartItems$ = this.store.select(selectCartState);
  cartItems: any;
  count: number = 0;

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(){
    this.store.select(selectCartState).subscribe(cart => {
      this.cartItems = cart
      console.log(this.cartItems);
      this.count = this.cartItems.items.length
    });
  }
}
