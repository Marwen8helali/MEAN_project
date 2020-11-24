import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { products } from "../../stock";
import { CommandeService } from "../../commande.service";
import { StorageService } from "../../storage.service";
@Component({
  selector: 'app-cafe-details',
  templateUrl: './cafe-details.component.html',
  styleUrls: ['./cafe-details.component.css']
})
export class CafeDetailsComponent implements OnInit {
  product;
  commandeContent;
  constructor(private route: ActivatedRoute, private commandeService: CommandeService , private storage: StorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('id')]
    });
this.commandeContent=this.storage.loadFromLocalStorage();
  }
 addToCommande(prod,commande){
this.commandeService.addToCommande(prod,this.commandeContent);
  }
  

}
