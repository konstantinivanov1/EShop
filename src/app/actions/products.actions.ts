import { createAction, props } from "@ngrx/store";
import { Product } from '../reducers/products.reducer';

export const loadProducts = createAction(
    '[Products] Load Products',
    props<{products: Product[]}>()
);

export const loadProductsSuccess = createAction(
    '[Products] Load Products Success',
    props<{products: Product[]}>()
);

export const loadProductsFail = createAction(
    '[Products] Load Products Fail',
    props<{error: string}>()
);