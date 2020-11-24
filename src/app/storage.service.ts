import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  saveToLocalStorage(cartContent) {
    localStorage.setItem('cafe', JSON.stringify(cartContent));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cafe')) || [];
  }

  clearLocalStorage() {
    localStorage.removeItem('cafe');
  }
}
