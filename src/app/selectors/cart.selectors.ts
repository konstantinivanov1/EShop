import { AppState } from "../app.module";

export const selectCartState = (state: AppState) => {
    return state.cart;
}