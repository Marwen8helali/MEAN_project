import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { CommandeService } from "../commande.service";
import { StorageService } from "../storage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private productService: ProductService,private commandeService: CommandeService , private storage: StorageService) { }
products:any

  ngOnInit(): void {

  }

  selectCategory(coffee:string) {
  

 this.productService.readproductByCategory(coffee).subscribe(
  (res) =>  this.products=res
);

 }

 addToCommande(prod){
   
  this.commandeService.addToCommande(prod,this.storage.loadFromLocalStorage());
    }
  

}
