import {Component, OnInit} from '@angular/core';

class Product {
  name: string;
  price: number;
  img: string;

  constructor(name: string, price: number, img: string) {
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  name: string = "";
  price: number = 0;
  img: string = "";

  constructor() {
    this.product.push(new Product("doantam", 112, "112"));
  }

  ngOnInit(): void {
  }

  delete(name: string) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].name === name) {
        this.product.splice(i, 1);
        return;
      }
    }
  }

  create() {
    this.product.push(new Product(this.name, this.price, this.img));
    this.name = '';
    this.img = '';
    this.price = 0;
  }

  show(name: string) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].name === name) {
        this.name = this.product[i].name;
        this.img = this.product[i].img;
        this.price = this.product[i].price;
        return;
      }
    }

  }
  edit(name: string) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].name === name) {
        this.product[i] = new Product(this.name, this.price, this.img);
        this.name = '';
        this.img = '';
        this.price = 0;
        return;
      }
    }
  }
}
