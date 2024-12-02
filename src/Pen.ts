export class Pen {
	ctx: CanvasRenderingContext2D;
	paths: { x: number; y: number }[][] = [];

	constructor(ctx: CanvasRenderingContext2D) {
		this.ctx = ctx;

		window.addEventListener("pointerdown", (evt) => {
			const targetElement = evt.target as HTMLElement;

			if (!targetElement) {
				return;
			}

			if (
				targetElement.localName === "canvas" &&
				localStorage.activeDrawTool === "pen"
			) {
				this.paths.push([
					{
						x: evt.clientX ?? window.drawAppStore.mouse.x,
						y: evt.clientY ?? window.drawAppStore.mouse.y,
					},
				]);
			}
		});
	}

	draw = () => {
		if (this.paths.length > 0) {
			for (let i = 0; i < this.paths.length; i++) {
				this.ctx.beginPath();
				this.ctx.moveTo(this.paths[i][0].x, this.paths[i][0].y);

				for (let j = 1; j < this.paths[i].length; j++) {
					this.ctx.lineTo(this.paths[i][j].x, this.paths[i][j].y);
				}

				this.ctx.stroke();
			}
		}

		if (!window.drawAppStore.interaction.buttonOn) {
			return;
		}

		const thisManyPaths = this.paths.length;
		const lastPath = this.paths[thisManyPaths - 1];

		const pointsInLastPath = lastPath ? lastPath.length : false;
		const lastPoint = pointsInLastPath ? lastPath[pointsInLastPath - 1] : false;

		if (
			localStorage.activeDrawTool === "pen" &&
			lastPoint &&
			lastPoint?.x &&
			lastPoint?.y &&
			(lastPoint.x !== window.drawAppStore.mouse.x ||
				lastPoint.y !== window.drawAppStore.mouse.y)
		) {
			this.paths[this.paths.length - 1].push({
				x: window.drawAppStore.mouse.x,
				y: window.drawAppStore.mouse.y,
			});
		}
	};
}
