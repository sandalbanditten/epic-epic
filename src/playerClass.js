class Player {
  constructor(width, height, speed, size, lives) {
    this.diameter = size;
    this.posX = width - this.radius();
    this.posY = height/2 - this.radius();
    this.speed = speed;
    this.lives = lives;
  }

  update() {
    //keycode 87 is the "W" key, so when pressed it moves the player up, that is cause the y-axis in js goes downward
    if(keyIsDown(87)) {
      this.posY -= this.speed;
    }
    //keycode 83 is the "S" key, when pressed move down, the higher the y-value the lower it goes
    if(keyIsDown(83)) {
      this.posY += this.speed;
    }
    //when colission is true take a life
    if(this.collisionCheck()) {
      this.lives--;
    }
    this.isDead();

    //just updates the position in case the window has changed size
    this.posX = width - this.diameter;
    this.posY = Math.min(Math.max(this.posY, 0 + this.radius()), height - this.radius());
  }

  //visualisation of the fucker
  show() {
    push();
    // fill(157, 78, 221);
    noFill();
    stroke(157, 78, 221);
    strokeWeight(3);
    circle(this.posX, this.posY, this.diameter);
    pop();
  }

  //oooohh wow, look it knows if it's colliding, how cool is that
  collisionCheck() {
    if(dist(mouseX, mouseY, this.posX, this.posY) <= this.radius()) {
      return true;
    } else {
      return false;
    }
  }

  //what!?!?! it also knows if it's dead?!?!?!
  isDead() {
    if(this.lives <= 0) {
      return true;
    } else {
      return false;
    }
  }

  //I don't wanna write "this.diameter / 2" every time
  radius() {
    return this.diameter / 2;
  }
}
