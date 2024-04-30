import { Component } from '@angular/core';
import { ProductService } from './services/product.services';
import { loadProducts } from './actions/products.actions';
import { Store } from '@ngrx/store';
import { AppState } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'New E-Shop';

  constructor(
    private productService: ProductService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.store.dispatch(loadProducts({ products }));
    });
  }
}
