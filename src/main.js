const size = 30;

function setup() {
	createCanvas(windowWidth, windowHeight);
	player = new Player(width, height, 3, size, 3);
	player = new Player(width, height/2, 3, 20, 3);

	//requires a "size" variable
	projLine = new ProjLine(size);
}

function draw() {
	background(220,0,0);

	player.update();

	showUi(player, 'cock', width, height);

	projLine.show();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
