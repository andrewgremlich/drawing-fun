import "./style.css";
import "./store";

import { createToolbar } from "./toolbar";
import { Canvas } from "./Canvas";
import { Pen } from "./Pen";
import { Circle } from "./Circle";
import { Square } from "./Square";

createToolbar();

const canvas = new Canvas();

const pen = new Pen(canvas.ctx);
const circle = new Circle(canvas.ctx);
const square = new Square(canvas.ctx);

canvas.draw([pen.draw])();

window.requestAnimationFrame(canvas.draw([pen.draw, circle.draw, square.draw]));

window.addEventListener(
	"pointermove",
	({ clientX, clientY, ctrlKey, altKey, shiftKey, buttons }) => {
		window.drawAppStore = {
			mouse: {
				x: clientX,
				y: clientY,
			},
			interaction: {
				ctrlKey,
				altKey,
				shiftKey,
				buttonOn: buttons === 1,
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
