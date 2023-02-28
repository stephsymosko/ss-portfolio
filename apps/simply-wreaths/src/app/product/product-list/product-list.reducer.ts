import { createReducer, on } from '@ngrx/store';
import { data, Product } from '@simply-wreaths/data-access';
// this is called a module import, done this way so actions can be name spaced
// could have imported the action directly, this is not a wildcard import, it will not import everything
import * as productListActions from './product-list.actions';

interface ProductState {
  // change to using ? because it could be undefined
  products?: Product[];
}
const initState: ProductState = {
  products: undefined,
};

export const productListReducer = createReducer(
  initState,
  // ideally you would spread the state so that a property is not missed
  on(productListActions.productsOpened, state=> ({
    products: [...data]
  }))
);
