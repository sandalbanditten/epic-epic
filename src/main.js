const size = 30;

let enemies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  player = new Player(width, height, 10, size, 5);
  frameRate(60);

  // requires a size, type and speed variables
  enemies.push(new Liniar(size, 'liniar', 5));
  background(255, 41, 117);
  // CSS SHIT
  const shakeElement = document.body;
  shakeElement?.classList.remove('shake');
  void shakeElement?.offsetWidth; // Funky trick to allow the screen shake
  shakeElement?.classList.add('shake');
  // CSS SHIT
}

function draw() {
  background(4, 4, 51, 20);

  if (player.isDead()) {
    background(4, 4, 51, 20);
  } else {
    if (enemies.length > 0) {
      for (let i = 0; i < enemies.length; i++) {
        enemies[i].update();
        enemies[i].show();
        if (enemies[i].x > width + enemies[i].diameter / 2) {
          enemies.shift();
          if (!player.isDead()) {
            switch(enemies[i].type) {
              case 'liniar': {
                player.score += 100;
                break;
              }
              case 'exponential': {
                player.score += 150;
                break;
              }
              case 'sincos': {
                player.score += 250;
                break;
              }
              default: break;
            }
          }
        }
        player.collision(enemies[i]);
      }
    }

    if (frameCount % 60 == 0) {
      switch(Math.floor(random(0, 100)) % 3) {
        case 0: {
          enemies.push(new Liniar(size, 'liniar', 5));
          break;
        }
        case 1: {
          enemies.push(new Exponential(size, 'exponential', 5));
          break;
        }
        case 2: {
          enemies.push(new SinCos(size, 'sincos', 5));
          break;
        }
        default: {
          enemies.push(new Liniar(size, 'liniar', 5));
          break;
        } 
      }
    }
    player.update();
    player.show();
  }

  showUi(player, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
