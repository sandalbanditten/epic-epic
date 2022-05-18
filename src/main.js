const size = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();
  player = new Player(width, height, 10, size, 3);

  // requires a size, type and speed variables
  liniar = new Liniar(size, 'liniar', 5);
  exponential = new Exponential(size, 'exponential', 5);
}

function draw() {
  background(16, 0, 43, 40);

  player.update();
  player.show();
  liniar.show();
  liniar.update();
  exponential.show();
  exponential.update();

  showUi(player, liniar, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
