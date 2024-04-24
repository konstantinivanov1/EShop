import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addToCard } from '../../actions/cart.actions';
import { AppState } from '../../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any = null;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ){}
  
  addToCard(product: any){
    event?.stopPropagation();
    this.store.dispatch(addToCard({product}));
  }
  
  setCurrentProduct(){
    this.router.navigate(['/product', this.product.id])
  }
}
