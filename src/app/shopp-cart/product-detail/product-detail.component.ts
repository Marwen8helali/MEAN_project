import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { prodact } from '../../produit'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor( private route : ActivatedRoute) { }
product;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
       this.product = (prodact[params.get('id')]) ;
       console.log(this.product)
    });

  }
  

}
