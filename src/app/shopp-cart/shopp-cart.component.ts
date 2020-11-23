import { Component, OnInit } from '@angular/core';
import { prodact } from '../produit';

@Component({
  selector: 'app-shopp-cart',
  templateUrl: './shopp-cart.component.html',
  styleUrls: ['./shopp-cart.component.css']
})
export class ShoppCartComponent implements OnInit {

  prodactList = prodact;

  constructor() { }

  ngOnInit(): void {
  }

}
