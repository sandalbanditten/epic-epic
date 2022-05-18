class Player {
  constructor(width, heigth, speed, size, lives) {
    this.size = size;
    this.posX = width - this.size/2;
    this.posY = heigth - this.size/2;
    this.speed = speed;
    this.lives = lives;
  }

  update() {  
    circle(this.posX, this.posY, this.size);
    if(keyIsDown(87)) {
      this.posY -= this.speed;
    }
    if(keyIsDown(83)) {
      this.posY += this.speed;
    }
      
    if(this.collisionCheck()) {
      this.lives--;
    }
    this.isDead();

    this.posX = width - this.size/2
  }

  collisionCheck() {
    if(dist(mouseX, mouseY, this.posX, this.posY) <= this.size/2) {
      return true;
    } else {
      return false;
    }
  }

  isDead() {
    if(this.lives <= 0) {
      return true;
    } else {
      return false;
    }
  }
}