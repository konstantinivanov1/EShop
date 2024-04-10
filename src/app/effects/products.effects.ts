import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../services/product.services";
import { loadProducts, loadProductsFail, loadProductsSuccess } from '../actions/products.actions';
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()

export class ProductEffects{
    loadProducts$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loadProducts),
                switchMap(() => 
                    this.productService.getProducts().pipe(
                        map(products => loadProductsSuccess({products})),
                        catchError(error => of(loadProductsFail({error})))
                    )
                )
            )
        }
    )

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}
}