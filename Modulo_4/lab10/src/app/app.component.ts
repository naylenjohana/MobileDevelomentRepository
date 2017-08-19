import { Component } from '@angular/core';

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

export class Teacher implements IPerson {
	id:number;	
	age:number;
	name:string;	
	lastNambre:string;	
	classes:Array<string>;
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

   Teacher: Teacher = {
    	//private	
		id:2,
		//private
		 age:3,
		//private
		 name:"Pedro",
		//private 
		lastNambre:"Perez",
		classes:['C01','C02','C03','C04'],

    };
}
