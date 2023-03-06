import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:product[]=[
  {
    productId:'1',
    productName:'kheer',
    productPrice:'150',
    productImage:'https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg'
  },

  {
  productId:'2',
  productName:'khurbani',
  productPrice:'190',
  productImage:'https://mautic.sitarafoods.com/media/images/348f9be677870903a80121e957c38a32.jpeg'
  }
]

addProduct(prod:product){
  this.products.push(prod);
}
viewMenu(){
  return of (this.products);
}
deleteproduct(prod:product){
  const ind=this.products.findIndex(obj=>obj.productId==prod.productId)
  this.products.splice(ind,1)
}
  constructor() { }
}