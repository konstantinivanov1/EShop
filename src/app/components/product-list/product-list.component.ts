import { Component } from '@angular/core';
import { Product } from '../../reducers/products.reducer';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ProductService } from '../../services/product.services';
import { selectProducts } from '../../selectors/products.selectors';
import { loadProducts } from '../../actions/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
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
