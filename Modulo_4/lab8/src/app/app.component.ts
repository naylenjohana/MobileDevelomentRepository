import { Component } from '@angular/core';

export class Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  quantity: number;
}

export interface IPerson{
	//private	
	id:number;
	//private
	 age:number;
	//private
	 name:string;
	//private 
	lastNambre:string;
}

export class Student implements IPerson {
	id:number;	
	age:number;
	name:string;	
	lastNambre:string;	
	constructor(){
		
		
	} 
}

	

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  title = 'app';

    product: Product = {
    id: 2,
    name: "Samsung galaxy 7",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20,
  };

  
    student: Student = {
    	//private	
		id:2,
		//private
		 age:3,
		//private
		 name:"Pedro",
		//private 
		lastNambre:"Perez"

    };
}