import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { MiniCartComponent } from "./shared/mini-cart/mini-cart.component";
import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CategoryListComponent } from "./components/category-list/category-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ActionReducer, ActionReducerMap, StoreModule } from "@ngrx/store";
import { productsReducer, ProductState } from "./reducers/products.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./effects/products.effects";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "./shared/product-card/product-card.component";
import { cartReducer, CartState } from "./reducers/cart.reducer";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { routes } from "./app.routes";

export interface AppState {
    products: ProductState
    cart: CartState
}

const reducer: ActionReducerMap<AppState> = {
    products: productsReducer,
    cart: cartReducer
}

@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MiniCartComponent,
        CartComponent,
        CheckoutComponent,
        ProductListComponent,
        CategoryListComponent,
        ProductDetailsComponent,
        ProductCardComponent,
        HomeComponent
    ],
    imports:[
        HttpClientModule,
        CommonModule,
        BrowserModule,
        FontAwesomeModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot(reducer),
        EffectsModule.forRoot(ProductEffects),
    ],
    providers:[],
    bootstrap:[AppComponent],
})

export class AppModule {}