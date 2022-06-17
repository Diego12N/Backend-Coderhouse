//LLmado a babel: "build": "babel ./origen.js -o ./destino.js -w"   -   ./node_modules/.bin/babel ./color.js -o ./colorES5.js -w

const MAX = 255;

class Color {
	constructor() {
		this.color = `color: (${this.rndColor()}, ${this.rndColor()}, ${this.rndColor()})`;
	}

	rndColor() {
		return Math.floor(MAX * Math.random());
	}

	getColor() {
		return this.color;
	}
}

const miColor = new Color();

console.log(miColor.getColor());
