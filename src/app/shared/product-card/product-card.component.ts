import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../reducers/products.reducer';
import { select, Store } from '@ngrx/store';
import { ProductService } from '../../services/product.services';
import { selectProducts } from '../../selectors/products.selectors';
import { loadProducts } from '../../actions/products.actions';
import { addToCard } from '../../actions/cart.actions';
import { selectCartState } from '../../selectors/cart.selectors';
import { AppState } from '../../app.module';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any = null;
  cart: any;

  constructor(
    private store: Store<AppState>
  ){}
  
  addToCard(product: any){
    this.store.dispatch(addToCard({product}));
    this.store.select(selectCartState).subscribe(cart => {
      this.cart = cart
      console.log(this.cart);
    });
  }
  
}
