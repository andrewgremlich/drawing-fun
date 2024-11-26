export class Canvas {
	drawingSurface: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;

	constructor() {
		this.drawingSurface = document.getElementById(
			"drawing-surface",
		) as HTMLCanvasElement;

		if (this.drawingSurface.getContext) {
			this.ctx = this.drawingSurface.getContext(
				"2d",
			) as CanvasRenderingContext2D;

			this.drawingSurface.width = window.innerWidth;
			this.drawingSurface.height = window.innerHeight;
		} else {
			throw new Error("Canvas not supported");
		}
	}
}
