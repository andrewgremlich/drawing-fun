export class Circle {
	ctx: CanvasRenderingContext2D;
	startingPoint: { x: number; y: number } | null = null;
	radius = 100;
	circles: { x: number; y: number; radius: number }[] = [];

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
				localStorage.activeDrawTool === "circle"
			) {
				this.startingPoint = {
					x: evt.clientX ?? window.drawAppStore.mouse.x,
					y: evt.clientY ?? window.drawAppStore.mouse.y,
				};
			}
		});

		// save the circle in memory.
		window.addEventListener("pointerup", () => {
			if (this.startingPoint && localStorage.activeDrawTool === "circle") {
				this.circles.push({
					x: this.startingPoint.x,
					y: this.startingPoint.y,
					radius: this.radius,
				});

				this.startingPoint = null;
			}
		});
	}

	draw = () => {
		// draw the circles in memory.
		for (const circle of this.circles) {
			this.ctx.beginPath();
			this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
			this.ctx.fillStyle = "blue";
			this.ctx.fill();
			this.ctx.strokeStyle = "black";
			this.ctx.lineWidth = 3;
			this.ctx.stroke();
		}

		if (!window.drawAppStore.interaction.buttonOn) {
			return;
		}

		if (!this.startingPoint) {
			return;
		}

		this.radius = Math.sqrt(
			Math.abs(this.startingPoint.x - window.drawAppStore.mouse.x) ** 2 +
				Math.abs(this.startingPoint.y - window.drawAppStore.mouse.y) ** 2,
		);

		this.ctx.beginPath();
		this.ctx.arc(
			this.startingPoint.x,
			this.startingPoint.y,
			this.radius,
			0,
			Math.PI * 2,
		);
		this.ctx.fillStyle = "blue";
		this.ctx.fill();
		this.ctx.strokeStyle = "black";
		this.ctx.lineWidth = 3;
		this.ctx.stroke();
	};
}
