import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service'

@Component({
  selector: 'app-shopp-cart',
  templateUrl: './shopp-cart.component.html',
  styleUrls: ['./shopp-cart.component.css']
})
export class ShoppCartComponent implements OnInit {
commandeContent;
totalPrice = 0;
TAX_RATE = 0.2;
  constructor(private storage: StorageService) { }

  ngOnInit(): void {
   this.commandeContent=this.storage.loadFromLocalStorage();
   this.computeTotalPrice();
   
  }
  computeTotalPrice() {
    for (let index = 0; index < this.commandeContent.length; index++) {
      this.totalPrice += this.commandeContent[index].price * this.commandeContent[index].quantity;

    }
  }

  clearCart() {
    this.storage.clearLocalStorage();
    this.ngOnInit();
  }

  
}
