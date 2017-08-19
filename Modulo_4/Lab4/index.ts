interface IVehicle {
	wheel: number;
	fuel: string;
	color: string;
	myMethod(wheel: number, fuel: string, color: string );
	
}

class Car implements IVehicle {

	wheel: number;
	fuel: string;
	color: string;
	constructor(){

		this.myMethod(4, 'gas', 'red');
	}

	myMethod(wheel: number, fuel: string, color: string='white'){};
}

class Motorcycle implements IVehicle {
	deluxe:boolean;
	wheel: number;
	fuel: string;
	color: string;

	constructor(deluxe: boolean){
		this.myMethod(2, 'gasoline');
		this.deluxe = deluxe;
	}

	setFuel(fuel: string): void{
		this.fuel = fuel;
	}

	getFuel(): string{
		return this.fuel;
	}
	myMethod(wheel: number, fuel: string, color: string='white'){};
}

var car = new Car();
var motorcycle = new Motorcycle(false);

console.log(car);
console.log(motorcycle);