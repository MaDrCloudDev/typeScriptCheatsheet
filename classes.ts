// Classes

// member types
// class Pet {
// 	name: string;
// }

// const pet = new Pet();
// pet.name = 'Buttons';

// member visibility
class Pet2 {
	private name: string;

	public constructor(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}

const pet2 = new Pet2('Snuggles');
console.log(pet2.getName()); // person.name isn't accessible from outside the class since it's private

// parameter properties
class Pet3 {
	// name is a private member variable
	public constructor(private name: string) {}

	public getName(): string {
		return this.name;
	}
}

const pet3 = new Pet3('Snowball');
console.log(pet3.getName());

// readonly
class Pet4 {
	private readonly name: string;

	public constructor(name: string) {
		// name cannot be changed after this first definition, which must be at it's declaration or in the constructor.
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}

const pet4 = new Pet4('Jingles');
console.log(pet4.getName());

// inheritance - implements
interface Shape {
	getArea: () => number;
}

class Rectangle implements Shape {
	public constructor(
		protected readonly width: number,
		protected readonly height: number
	) {}

	public getArea(): number {
		return this.width * this.height;
	}
}

// inheritance - extends (extends Rectangle above)
interface Shape {
	getArea: () => number;
}

class Square extends Rectangle {
	public constructor(width: number) {
		super(width, width);
	} // getArea gets inherited from Rectangle
}

// override
interface Shape {
	getArea: () => number;
}

class Rectangle2 implements Shape {
	// using protected for these members allows access from classes that extend from this class, such as Square
	public constructor(
		protected readonly width: number,
		protected readonly height: number
	) {}

	public getArea(): number {
		return this.width * this.height;
	}

	public toString(): string {
		return `Rectangle[width=${this.width}, height=${this.height}]`;
	}
}

class Square2 extends Rectangle2 {
	public constructor(width: number) {
		super(width, width);
	} // this toString replaces the toString from Rectangle

	public override toString(): string {
		return `Square[width=${this.width}]`;
	}
}

// abstract classes
abstract class Polygon {
	public abstract getArea(): number;

	public toString(): string {
		return `Polygon[area=${this.getArea()}]`;
	}
}

class Rectangle3 extends Polygon {
	public constructor(
		protected readonly width: number,
		protected readonly height: number
	) {
		super();
	}

	public getArea(): number {
		return this.width * this.height;
	}
}
