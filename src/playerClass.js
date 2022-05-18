class Player {
  constructor(width, height, speed, size, lives) {
    this.diameter = size;
    this.posX = width - this.radius();
    this.posY = height - this.radius();
    this.speed = speed;
    this.lives = lives;
  }

  update() {
    circle(this.posX, this.posY, this.diameter);
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

    this.posX = width - this.radius();
    this.posY = Math.min(Math.max(this.posY, 0 + this.radius()), height - this.radius());
  }

  collisionCheck() {
    if(dist(mouseX, mouseY, this.posX, this.posY) <= this.radius()) {
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

	radius() {
		return this.diameter / 2;
	}
}
