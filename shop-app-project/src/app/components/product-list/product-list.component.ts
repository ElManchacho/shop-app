import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/@shared/data/products';
import Product from 'src/app/types/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList:Product[]

  constructor() {
    this.productList = products
  }

  ngOnInit(): void {
  }

}
