import "./style.css";
import { createToolbar } from "./toolbar";
import { Canvas } from "./Canvas";

createToolbar();
const canvas = new Canvas();

const cursor = {
	x: innerWidth / 2,
	y: innerHeight / 2,
};

const draw = () => {
	canvas.ctx.clearRect(0, 0, canvas.ctx.canvas.width, canvas.ctx.canvas.height);
	window.requestAnimationFrame(draw);
};

draw();

window.addEventListener("resize", () => {
	canvas.ctx.canvas.width = window.innerWidth;
	canvas.ctx.canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
	cursor.x = e.clientX;
	cursor.y = e.clientY;
});
