import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { products } from 'src/app/@shared/data/products';
import Product from 'src/app/types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Output() hoverEvent = new EventEmitter<boolean>();

  productList:Product[]

  constructor() {
    this.productList = products
  }

  hoverParent(hovered:any){
    this.hoverEvent.emit(hovered);
  }

  ngOnInit(): void {
  }

}
