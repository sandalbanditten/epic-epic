const size = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();
  player = new Player(width, height, 3, size, 3);

  // requires a "size" variable
  liniar = new Liniar(size);
}

function draw() {
  background(16, 0, 43);

  player.update();
  player.show();
  liniar.show();
  liniar.update();

  showUi(player, liniar, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
