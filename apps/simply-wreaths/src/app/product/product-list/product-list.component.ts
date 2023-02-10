import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasicProduct, Product } from '@simply-wreaths/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'ss-portfolio-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {

  // will use async pipe in the template, which will subscribe and unsubscribe automatically
  // otherwise, we would have to unsubscribe in the ngOnDestroy hook or use the takeUntil operator
  products$: Observable<BasicProduct[]> = this.store.select(state=>state.product.products);
  constructor(
    // this is a generic type, so we can specify the type of the state
    private readonly store: Store<{ product: { products: Product[] } }>  ) {}
}
