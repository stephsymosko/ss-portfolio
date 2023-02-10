import { createReducer } from '@ngrx/store';
import { data, Product } from '@simply-wreaths/data-access';

interface ProductState {
  products: Product[];
}
const initState: ProductState = {
  products: data,
};

export const productListReducer = createReducer(
  initState
);
