import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { productListReducer } from './product/product-list/product-list.reducer';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ProductListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({product: productListReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
