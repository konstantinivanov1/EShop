import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../reducers/products.reducer';
import { select, Store } from '@ngrx/store';
import { ProductService } from '../../services/product.services';
import { selectProducts } from '../../selectors/products.selectors';
import { loadProducts } from '../../actions/products.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  products$: Observable<Product[]> | undefined;
  products: Product[] = [];

  constructor(private store: Store<any>, private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(selectProducts));

    this.productService.getProducts().subscribe(products => {
      this.store.dispatch(loadProducts({ products }));
    });

    this.products$.subscribe(products => {
      this.products = products
    });
    
  }

}
