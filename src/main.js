function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Player(width, height, 3, 20, 3);
	projLine = new ProjLine();
}

function draw() {
	background(220,0,0);

	player.update();

	showUi('balls', 'cock', width, height);

	fill(0,0,255);
	projLine.show();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
