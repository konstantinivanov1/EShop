import { createReducer } from '@ngrx/store';
import { Product } from './products.reducer';
export interface CartState{

    items: any[]
}

export const initialState: CartState = {
    items: []
}

export const cartReducer = createReducer(
    initialState,
)