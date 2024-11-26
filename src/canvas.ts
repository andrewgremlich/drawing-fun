export const drawingSurface = document.getElementById(
	"drawing-surface",
) as HTMLCanvasElement;

export const Canvas = () => {
	if (drawingSurface.getContext) {
		console.log("Canvas supported");
		const canvasCtx = drawingSurface.getContext(
			"2d",
		) as CanvasRenderingContext2D;

		return canvasCtx;
	// biome-ignore lint/style/noUselessElse: just to show error if canvas not supported
}  else {
		console.error("Canvas not supported");
	}
};
