export const drawingSurface = document.getElementById(
	"drawing-surface",
) as HTMLCanvasElement;

const Canvas = () => {
	if (drawingSurface.getContext) {
		console.log("Canvas supported");
		const canvasCtx = drawingSurface.getContext(
			"2d",
		) as CanvasRenderingContext2D;
	} else {
		console.error("Canvas not supported");
	}
};

export const loadCanvas = () => {
	window.addEventListener("load", Canvas);
};
