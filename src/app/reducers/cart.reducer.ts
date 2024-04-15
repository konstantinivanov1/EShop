import { createReducer, on } from '@ngrx/store';
import { Product } from './products.reducer';
import { addToCard } from '../actions/cart.actions';
export interface CartState{

    items: any[]
}

export const initialState: CartState = {
    items: []
}

export const cartReducer = createReducer(
    initialState,
    on(addToCard, (state, {product}) => {
        return{
            ...state,
            items: [...state.items, product]
        }
    })
)