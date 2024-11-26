export class Circle {
	ctx: CanvasRenderingContext2D;

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;
	}

	draw() {
		if (localStorage.activeDrawTool !== "circle") {
			return;
		}

		if (!window.drawAppStore.interaction.buttonOn) {
			return;
		}
	}
}