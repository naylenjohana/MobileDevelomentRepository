import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
import{Product} from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: FirebaseListObservable<any[]>;
  //productTable: FirebaseObjectObservable<any>;
  product: Product=new Product();

  constructor(db: AngularFireDatabase) {
    this.products = db.list('/product');
    //this.productTable = db.object('/person');
  }
  addToList() {
    this.products.push(this.product);
    this.product=new Product();
  }
  /*saveFirstName(firstName: string) {
    this.item.set({ firstname: firstName });
  }
  saveLastName(lastName: string) {
    this.item.set({ lastname: lastName });
  }
  delete() {
    this.item.remove();
  }*/
}
