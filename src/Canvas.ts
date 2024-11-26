export class Canvas {
	ctx: CanvasRenderingContext2D;
	raf: number | null = null;

	constructor() {
		const drawingSurface = document.getElementById(
			"drawing-surface",
		) as HTMLCanvasElement;

		if (drawingSurface.getContext) {
			this.ctx = drawingSurface.getContext("2d") as CanvasRenderingContext2D;

			drawingSurface.width = window.innerWidth;
			drawingSurface.height = window.innerHeight;
		} else {
			throw new Error("Canvas not supported");
		}

		window.addEventListener("resize", () => {
			this.ctx.canvas.width = window.innerWidth;
			this.ctx.canvas.height = window.innerHeight;
		});
	}

	clearCanvas = () => {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	};

	draw = (drawFunctions: [() => void] | null) => () => {
		this.clearCanvas();

		this.ctx.fillRect(25, 25, 100, 100);
		this.ctx.clearRect(45, 45, 60, 60);
		this.ctx.strokeRect(50, 50, 50, 50);

		if (drawFunctions) {
			for (const drawFunction of drawFunctions) {
				drawFunction();
			}
		}

		this.raf = window.requestAnimationFrame(this.draw(drawFunctions));
	};
}
