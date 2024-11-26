import "./style.css";
import "./store";

import { createToolbar } from "./toolbar";
import { Canvas } from "./Canvas";
import { Pen } from "./Pen";

createToolbar();

const canvas = new Canvas();

const pen = new Pen(canvas.ctx);

canvas.draw([pen.draw])();

canvas.ctx.canvas.addEventListener("mouseover", () => {
	canvas.raf = window.requestAnimationFrame(canvas.draw([pen.draw]));
});

canvas.ctx.canvas.addEventListener("mouseout", () => {
	if (canvas.raf) {
		window.cancelAnimationFrame(canvas.raf);
	}
});

window.addEventListener(
	"mousemove",
	({ clientX, clientY, ctrlKey, altKey, buttons, shiftKey }) => {
		window.drawAppStore = {
			mouse: {
				x: clientX,
				y: clientY,
			},
			interaction: {
				ctrlKey,
				altKey,
				button: buttons === 1,
				shiftKey,
			},
		};
	},
);

// There needs to be one event listener for the mousemove event that
// updates the cursor's x and y coordinates. This will feed into Circle, Square, and Draw.
// If the click is held, then record the coordinates along the path.
// debounce the draw function to only run every 100ms for a smoother line.
// If the click is released, then stop recording the path.
// If the click is released, then draw the path.
//
// The circle just needs the math to calculate the radius from the center to the cursor.
// The square just needs the math to calculate the width and height from the center to the cursor.
