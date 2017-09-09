import { Component, OnInit, Input,Output,EventEmitter  } from '@angular/core';
import { Product } from '../../models/product';
import {ProductService} from '../../service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

	 @Input()
    product: Product;
    @Output() productUpdated = new EventEmitter();
    constructor(private productService: ProductService, private router: Router,) {
      
        }
    update(product:Product):void{
      this.productService.update(product)
      .subscribe(products=> { this.product=null;
         this.router.navigateByUrl('/products');})
      ,error=>{console.log(error)}
    }

}
