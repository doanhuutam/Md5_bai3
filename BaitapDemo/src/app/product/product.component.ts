import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  products: Product[] = [];
  name: string = "";
  price: number = 0;
  img: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }
@Output()deletePr=new EventEmitter();

  delete(name: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.deletePr.emit(i)
        return;
      }
    }
  }
@Output()createPr=new EventEmitter();
  create() {
    let a =new Product(this.name,this.price,this.img)
    this.createPr.emit(a);
    this.name= "";
    this.price= 0;
    this.img= "";

  }

  show(name: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.name = this.products[i].name;
        this.img = this.products[i].img;
        this.price = this.products[i].price;
        return;
      }
    }

  }
  @Output()editPr=new EventEmitter();

  edit(name: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name==name) {
        this.products[i] = new Product(this.name, this.price, this.img);
        this.name = '';
        this.img = '';
        this.price = 0;
        return;
      }
    }
  }
}
