export class Square {
	ctx: CanvasRenderingContext2D;
	startingPoint: { x: number; y: number } | null = null;
	squares: { x: number; y: number; width: number; height: number }[] = [];
	width = 100;
	height = 100;

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;

		window.addEventListener("pointerdown", (evt) => {
			const targetElement = evt.target as HTMLElement;

			if (!targetElement) {
				return;
			}

			if (
				targetElement.localName === "canvas" &&
				!this.startingPoint &&
				localStorage.activeDrawTool === "square"
			) {
				this.startingPoint = {
					x: window.drawAppStore.mouse.x,
					y: window.drawAppStore.mouse.y,
				};
			}
		});

		// save the circle in memory.
		window.addEventListener("pointerup", () => {
			if (this.startingPoint && localStorage.activeDrawTool === "square") {
				this.squares.push({
					x: this.startingPoint.x,
					y: this.startingPoint.y,
					width: this.width,
					height: this.height,
				});

				this.startingPoint = null;
			}
		});
	}

	draw = () => {
		for (const square of this.squares) {
			this.ctx.beginPath();
			this.ctx.rect(square.x, square.y, square.width, square.height);
			this.ctx.fillStyle = "blue";
			this.ctx.fill();
			this.ctx.strokeStyle = "black";
			this.ctx.lineWidth = 3;
			this.ctx.stroke();
		}

		if (localStorage.activeDrawTool !== "square") {
			return;
		}

		if (!window.drawAppStore.interaction.buttonOn) {
			return;
		}

		if (!this.startingPoint) {
			return;
		}

		this.width = window.drawAppStore.mouse.x - this.startingPoint.x;
		this.height = window.drawAppStore.mouse.y - this.startingPoint.y;

		this.ctx.beginPath();
		this.ctx.rect(
			this.startingPoint.x,
			this.startingPoint.y,
			this.width,
			this.height,
		);
		this.ctx.fillStyle = "blue";
		this.ctx.fill();
	};
}
