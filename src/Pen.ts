export class Pen {
	ctx: CanvasRenderingContext2D;
	path: { x: number; y: number }[] = [];

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;
	}

	draw = () => {
		if (localStorage.activeDrawTool !== "pen") {
			return;
		}

		if (this.path.length > 0) {
			this.ctx.beginPath();
			this.ctx.moveTo(this.path[0].x, this.path[0].y);

			for (let i = 1; i < this.path.length; i++) {
				this.ctx.lineTo(this.path[i].x, this.path[i].y);
			}

			this.ctx.stroke();
		}

		if (!window.drawAppStore.interaction.button) {
			return;
		}

		if (this.path.length === 0) {
			this.path.push({
				x: window.drawAppStore.mouse.x,
				y: window.drawAppStore.mouse.y,
			});
		}

		const lastPoint = this.path[this.path.length - 1];

		if (
			lastPoint.x !== window.drawAppStore.mouse.x ||
			lastPoint.y !== window.drawAppStore.mouse.y
		) {
			this.path.push({
				x: window.drawAppStore.mouse.x,
				y: window.drawAppStore.mouse.y,
			});
		}
	};
}
