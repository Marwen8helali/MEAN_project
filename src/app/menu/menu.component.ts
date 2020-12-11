import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";

@Component({
selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  productList = null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readAllProducts().subscribe(
      (res) => this.productList = res
    );
  }

  }


