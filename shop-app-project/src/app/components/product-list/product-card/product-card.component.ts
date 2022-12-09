import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/types/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  hovered:boolean=false

  @Output() hoverEvent = new EventEmitter<boolean>();

  hover(value: boolean) {
    this.hovered=value
    console.log("child",value)
    this.hoverEvent.emit(value);
  }

  @Input() product!:Product

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    if (localStorage.getItem('myshopcart')==null)
    {
      var cart:Number[] = [];
      localStorage.setItem("myshopcart", JSON.stringify(cart));
    }
    var cart:Number[] = JSON.parse(localStorage.getItem("myshopcart")!);
    cart.push(this.product.id);
    localStorage.setItem("myshopcart", JSON.stringify(cart));
  }

}
