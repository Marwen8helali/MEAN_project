import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  saveToLocalStorage(cartContent) {
    localStorage.setItem('coffees', JSON.stringify(cartContent));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('coffees')) || [];
  }

  clearLocalStorage() {
    localStorage.removeItem('coffees');
  }
}
