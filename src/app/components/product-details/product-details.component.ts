import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { Product } from '../../reducers/products.reducer';
import { selectCurrentProduct, selectRelatedProducts } from '../../selectors/products.selectors';
import { ActivatedRoute } from '@angular/router';
import { getProductByCategory, getProductById } from '../../actions/products.actions';
import { Observable } from 'rxjs';
import { addToCard } from '../../actions/cart.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product$: any;
  product: any;
  productId: number | null = null;
  category: string | undefined = '';
  relatedProducts$: any;
  relatedProducts: any;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = Number(id);
    
    this.store.dispatch(getProductById({productId: this.productId}))

    this.product$ = this.store.select(selectCurrentProduct);
    this.product$.subscribe((product: Product) => {
      this.product = product;
    })
    
    this.category = this.product?.category;

    this.store.dispatch(getProductByCategory({category: this.category}))

    this.relatedProducts$ = this.store.select(selectRelatedProducts);
    this.relatedProducts$.subscribe((product: Product) => {
      this.relatedProducts = product;
      console.log(this.relatedProducts);
      
    })
    window.scrollTo(0, 0)
  }

  refresh() {
    this.ngOnInit();
  }

  addToCard(){
    this.store.dispatch(addToCard(this.product));
  }
}
