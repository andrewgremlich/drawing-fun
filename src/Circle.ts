export class Circle {
	constructor() {}
	draw() {}
	setRadius(radius) {}
	setCoords(x, y) {}
}

// There needs to be one event listener for the mousemove event that
// updates the cursor's x and y coordinates. This will feed into Circle, Square, and Draw.
// If the click is held, then record the coordinates along the path.
// debounce the draw function to only run every 100ms for a smoother line.
// If the click is released, then stop recording the path.
// If the click is released, then draw the path.
// 
// The circle just needs the math to calculate the radius from the center to the cursor.
// The square just needs the math to calculate the width and height from the center to the cursor.