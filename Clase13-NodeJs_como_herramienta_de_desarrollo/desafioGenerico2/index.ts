// Instalar transpilador de TS npm i typescript
// npm i typescript
// TS config: node_modules/.bin/tsc --init

const MAX: number = 255;

class Color {
	private color: String = "";

	constructor() {
		this.color = `color: (${this.rndColor()}, ${this.rndColor()}, ${this.rndColor()})`;
	}

	private rndColor(): number {
		return Math.floor(MAX * Math.random());
	}

	getColor = () => this.color;
}

const miColor = new Color();
console.log(miColor.getColor());
