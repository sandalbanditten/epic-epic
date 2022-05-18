const size = 30;

let enemies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  player = new Player(width, height, 10, size, 5);
  frameRate(60);

  // requires a size, type and speed variables
  enemies.push(new Liniar(size, 'liniar', 5));
}

function draw() {
  background(4, 4, 51, 20);

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].show();
    if (enemies[i].x > width + enemies[i].diameter / 2) {
      enemies.shift();
    }
    player.collision(enemies[i]);
  }

  if (frameCount % 15 == 0) {
    switch(Math.floor(random(0, 100)) % 2) {
      case 0: {
        enemies.push(new Liniar(size, 'liniar', 5));
        break;
      }
      case 1: {
        enemies.push(new Exponential(size, 'exponential', 5));
        break;
      }
      default: break;
    }
  }

  player.update();
  player.show();

  showUi(player, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
