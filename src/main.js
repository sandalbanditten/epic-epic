const size = 30;

let enemies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  player = new Player(width, height, 10, size, 5);

  // requires a size, type and speed variables
  enemies.push(new Liniar(size, 'liniar', 5));
}

function draw() {
  background(16, 0, 43, 40);

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].show();
    if (enemies[i].x > width) {
      enemies.shift();
    }
    player.collision(enemies[i]);
  }

  if (frameCount % 60 == 0) {
    if (Math.floor(random(0, 10)) % 2 == 0) {
      enemies.push(new Liniar(size, 'liniar', 5));
    } else {
      enemies.push(new Exponential(size, 'exponential', 5));
    }
  }

  player.update();
  player.show();

  showUi(player, enemies[enemies.length - 1], width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
