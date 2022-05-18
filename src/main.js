const size = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();
  player = new Player(width, height, 3, size, 3);

  // requires a "size" variable
  projLine = new ProjLine(size);
}

function draw() {
  background(16, 0, 43, 40);

  player.update();
  player.show();
  projLine.show();
  projLine.update();

  showUi(player, projLine, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
