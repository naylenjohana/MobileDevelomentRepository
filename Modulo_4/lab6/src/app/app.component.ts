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

	/*get Classes():Array<string>{return this.classes;}
	set Classes(classes:Array<string>){this.classes=classes;}
	get Grade():number{return this.grade;}
	set Grade(grade:number){this.grade=grade;}
	get Group():string{return this.group;}
	set Group(group:string){this.group=group;};
}
/*export class Person{
	//private	
	id:number;
	//private
	 age:number;
	//private
	 name:string;
	//private 
	lastNambre:string;

	constructor(){
		
	}

	get Id():number{return this.id;}
	get Age():number{return this.age;}
	get Name():string{return this.name;}
	get LastName():string{return this.lastNambre;}	
	set Name(name:string){this.name=name;}
	set LastName(lastName:string){this.lastNambre=lastName;}
}

 export class Student extends Person {
	
	//private classes:Array<string>;
	//private grade:number;
	//private group:string;

	constructor(){
		super()
		
	} 

	/*get Classes():Array<string>{return this.classes;}
	set Classes(classes:Array<string>){this.classes=classes;}
	get Grade():number{return this.grade;}
	set Grade(grade:number){this.grade=grade;}
	get Group():string{return this.group;}
	set Group(group:string){this.group=group;};
}*/

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
    
	//this.student.id(1);
	/*student.setAge(18);	
	student.setName('Johana');	
	student.setLastName('Perez');	
	student.setGrade(3);
	student.setClasses(['Class1','Class2']);
	student.setGroup('G02');*/
}
