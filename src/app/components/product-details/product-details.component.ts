import { ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';
import { Product } from '../../reducers/products.reducer';
import { selectCurrentProduct, selectProducts, selectRelatedProducts } from '../../selectors/products.selectors';
import { ActivatedRoute } from '@angular/router';
import { getProductByCategory, setSelectedProduct } from '../../actions/products.actions';
import { addToCard } from '../../actions/cart.actions';
import { map } from 'rxjs';

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
  allProducts: any;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = Number(id);
    
    this.store.dispatch(setSelectedProduct({productId: this.productId}));

    this.product$ = this.store.select(selectCurrentProduct);
    this.product$.subscribe((product: Product) => {
      this.product = product;
      console.log(this.productId);
    })
    
    this.category = this.product?.category;

    this.store.dispatch(getProductByCategory({category: this.category}))

    this.relatedProducts$ = this.store.select(selectRelatedProducts);
    this.relatedProducts$.subscribe((product: Product) => {
      this.relatedProducts = product;      
    })
    window.scrollTo(0, 0);

    this.cdr.detectChanges();
  }

  refresh() {
    this.ngOnInit();
  }

  addToCard(){
    this.store.dispatch(addToCard(this.product));
  }
}
