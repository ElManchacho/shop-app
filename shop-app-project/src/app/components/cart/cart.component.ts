import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/@shared/data/products';
import Product from 'src/app/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:number[]

  productList:any[]

  productTotal:number = 0

  constructor() {
    this.productList = products
    if(localStorage.getItem("myshopcart")!=null)
    {
      this.cart = []
      var myshopcart:[] = JSON.parse(localStorage.getItem("myshopcart")!)
      this.productList.forEach(product => {
        myshopcart.forEach(productId =>{
          if(product.id==productId)
          {
            this.cart.push(product.id)
            if (!product.number) 
            {
              product.number = 0
            }
            product.number+=1
            product.total = product.number * Number(product.specifications.price.split('$')[0])
            this.productTotal+=Number(product.specifications.price.split('$')[0])
          }
        })
      });
    }
    else{
      this.cart = []
    }
  }

  ngOnInit(): void {
  }

  addArticle(id:number){
    this.cart.push(id)
    localStorage.setItem("myshopcart", JSON.stringify(this.cart));
    //this.productTotal=0
    this.productList.forEach(product=>{
      if (product.id == id){
        product.number+=1
        product.total = product.number * Number(product.specifications.price.split('$')[0])
        this.productTotal+=Number(product.specifications.price.split('$')[0])
      }
    })
  }

  removeArticle(id:number){
    const index = this.cart.indexOf(id, 0);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    localStorage.setItem("myshopcart", JSON.stringify(this.cart));
    //this.productTotal=0
    this.productList.forEach(product=>{
      if (product.id == id){
        product.number-=1
        product.total = product.number * Number(product.specifications.price.split('$')[0])
        this.productTotal-=Number(product.specifications.price.split('$')[0])
      }
    })
  }


}
