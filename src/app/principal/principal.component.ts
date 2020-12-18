import { Component, OnInit } 
from '@angular/core';
//import { products } from "../store";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  //productlist =products;
  constructor() { }

  ngOnInit(): void {
  //console.log(this.productlist);
  }

}
