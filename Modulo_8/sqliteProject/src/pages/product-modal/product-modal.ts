import { Component } from '@angular/core';
import {IonicPage, ViewController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceProvider} from "../../providers/product-service/product-service";

@IonicPage()
@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html',
})



export class ProductModalPage {

  myForm: FormGroup;
  public id: number;
  public name: string;

  constructor(public viewCtrl: ViewController,
              public formBuilder: FormBuilder,
              private productServiceProvider :ProductServiceProvider,
              public nav: NavParams) {
    this.id =parseInt(nav.get('id'));    
    console.log(this.id);
    this.name = nav.get('name');
    this.myForm = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      name: [this.name, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      id:[this.id]
    });
  }

  public saveForm() {
    if(!this.id)
    {
    this.productServiceProvider.addProduct(this.myForm.value.name)
      .then(result => {
        console.debug(result);
        this.dismiss();
      })
      .catch(err=>console.error("error create product: ", err));
    }
    else
    {
      this.productServiceProvider.updateProduct(this.id,this.myForm.value.name)
      .then(result => {
        console.debug(result);
        this.dismiss();
      })
      .catch(err=>console.error("error create product: ", err));
    }
  }

  public dismiss() {
    let data = {};
    this.viewCtrl.dismiss(data);
  }
}