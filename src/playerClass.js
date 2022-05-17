class Player {
  constructor(posX, posY, speed, size, lives) {
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.size = size;
    this.lives = lives;
  }

  update() {  
    circle(this.posX - this.size/2, this.posY - this.size/2, this.size);
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