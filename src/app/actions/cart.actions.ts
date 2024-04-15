import { createAction, props } from "@ngrx/store";
import { Product } from "../reducers/products.reducer";

export const addToCard = createAction(
    '[Cart] Add to Card',
    props<{product: Product}>()
)