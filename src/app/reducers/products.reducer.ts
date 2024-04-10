import { createReducer, on } from "@ngrx/store"
import { loadProducts, loadProductsFail, loadProductsSuccess } from "../actions/products.actions"

export interface Product{
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "sale_price": number,
    "image": string,
    "rating": number,
    "category": string
};

export interface ProductState{
    products: Product[]
};

export const initialState: ProductState = {
    products: []
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts , () => {
        return{
            products: [],
        }
    }),
    on(loadProductsSuccess, (state, { products }) => {
        return{
            ...state,
            products
        }
    })
)