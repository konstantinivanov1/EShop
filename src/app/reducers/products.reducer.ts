import { createReducer, on } from "@ngrx/store"
import { getProductByCategory, getProductById, loadProducts, loadProductsFail, loadProductsSuccess } from "../actions/products.actions"
import { findIndex } from "rxjs"

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
    products: Product[],
    selectedProduct: Product | null,
    relatedProducts: Product[]
};

export const initialState: ProductState = {
    products: [],
    selectedProduct: null,
    relatedProducts: []
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts , (state) => {
        return{
            ...state,
            products: [],
        }
    }),
    on(loadProductsSuccess, (state, { products }) => {
        return{
            ...state,
            products
        }
    }),
    on(getProductById, (state, {productId}) => {
        const productIndex = state.products.findIndex(product => product.id === productId);
        if(productIndex === -1){
            return{
                ...state
            }   
        }
        return{
            ...state,
            selectedProduct: state.products[productIndex]
        }
    }),
    on(getProductByCategory, (state, {category}) => {
        const relatedProducts = state.products.filter(product => product.category === category)
        return {
            ...state,
            relatedProducts
        }
    })
)