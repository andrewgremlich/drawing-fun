export const drawingSurface = document.getElementById(
	"drawing-surface",
) as HTMLCanvasElement;
export const canvasCtx = drawingSurface.getContext(
	"2d",
) as CanvasRenderingContext2D;
