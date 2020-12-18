import { Injectable } from '@angular/core';
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
commandeContent;

  constructor(private storage:StorageService )
   { 
     this.commandeContent=storage.loadFromLocalStorage();
     
   }

   addToCommande(prod,commande) {
    commande=this.loadFromCommande();
    for (let index = 0; index < commande.length; index++) {
      if(commande[index].desc == prod.desc) {
        commande[index].quantity += 1;

        this.storage.saveToLocalStorage(commande);
        return;
      }
    }
    prod.quantity = 1;
    commande.push(prod);
    this.storage.saveToLocalStorage(commande);
    
  }
  
  loadFromCommande() {
    return this.storage.loadFromLocalStorage();
  }

  clearCommande() {
    this.storage.clearLocalStorage()
  }
}
