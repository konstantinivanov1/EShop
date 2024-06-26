import { createSelector } from "@ngrx/store";
import { AppState } from "../app.module";

export const selectProductState = (state: AppState) => {
    return state.products;
}

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
)

export const selectCurrentProduct = createSelector(
    selectProductState,
    (state) => state.selectedProduct
)

export const selectRelatedProducts = createSelector(
    selectProductState,
    (state) => state.relatedProducts
)