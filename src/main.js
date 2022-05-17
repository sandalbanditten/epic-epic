function setup() {
	createCanvas(windowWidth, windowHeight);
	projLine = new ProjLine()
}

function draw() {
	background(220,0,0);
<<<<<<< Updated upstream
	showUi('balls', 'cock', width, height);
=======

	fill(0,0,255)
	projLine.show()
>>>>>>> Stashed changes
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
