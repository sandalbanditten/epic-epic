function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(220,0,0);
	showUi('balls', 'cock', width, height);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
