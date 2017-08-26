import { Component } from '@angular/core';

export class Vehicle {
	brand:string;	
	model:string;
	color:string;	
	plate:string;	
  capacity:string;
  buildYear:String;
 // ownerId:number
	constructor(){
	} 
}

export class Driver {
	id:number;	
	license:number;
	firstName:string;	
	lastName:string;	
  age:String;  
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
  selected: Vehicle;
  vehicles:Array<Vehicle>=[
    {
      brand:'BMW'
      ,model:'BMW M140i 3-door'
      ,color:'red'
      ,plate:'NJR2021'
      ,capacity:'4 people'
      ,buildYear:'2016'
      
    },
    {
      brand:'BMW'
      ,model:'BMW M140i 2-door'
      ,color:'Pink'
      ,plate:'NJR2021'
      ,capacity:'4 people'
      ,buildYear:'2016'
    },
    {
      brand:'BMW'
      ,model:'BMW M140i 1-door'
      ,color:'Purple'
      ,plate:'NJR2021'
      ,capacity:'4 people'
      ,buildYear:'2016'
    },
  ];
  driver=
    {
      id:1,
      license:56984
      ,firstName:'Pedro'
      ,lastName:'Perez'
      ,age:26
      
    };
  
    onSelect(vehicle: Vehicle){
      this.selected = vehicle;
    }

}
