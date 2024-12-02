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
