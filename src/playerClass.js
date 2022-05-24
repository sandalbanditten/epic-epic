class Player {
  constructor(width, height, speed, size, lives) {
    this.diameter = size;
    this.speed = speed;
    this.lives = lives;
    this.startingLives = lives;
    this.posX = width - this.diameter * this.lives;
    this.posY = height / 2 - this.radius();
    this.score = 0;
  }

  update() {
    //just updates the position in case the window has changed size
    let startingSize = this.diameter * this.startingLives;
    let size = this.diameter * this.lives;

    //keycode 87 is the "W" key, so when pressed it moves the player up, that is cause the y-axis in js goes downward
    if(keyIsDown(87)) {
      this.posY -= this.speed;
    }
    //keycode 83 is the "S" key, when pressed move down, the higher the y-value the lower it goes
    if(keyIsDown(83)) {
      this.posY += this.speed;
    }

    if(keyIsDown(65)) {
      this.posX -= this.speed;
    }
    if(keyIsDown(68)) {
      this.posX += this.speed;
    }

    //when colission is true take a life
    this.isDead();

    // Playerspeed is dependent on the size
    this.speed = map(this.lives, 1, this.startingLives, 30, 5);
    this.posX = Math.min(Math.max(this.posX, 0 + size), width - size);
    this.posY = Math.min(Math.max(this.posY, 0 + size), height - size);
  }

  //visualisation of the fucker
  show() {
    push();
    // fill(157, 78, 221);
    noFill();
    stroke(0, 218, 255);
    strokeWeight(this.lives * 2);
    for (let i = 1; i <= this.lives; i++) {
      circle(this.posX, this.posY, this.diameter * i);
    }
    pop();
  }

  //oooohh wow, look it knows if it's colliding, how cool is that
  collision(enemy) {
    if(dist(enemy.x, enemy.y, this.posX, this.posY) <= this.radius() * this.lives) {
      this.lives--;
      background(255, 41, 117);
      enemies.splice(enemies.indexOf(enemy), 1);

      // CSS SHIT
      const shakeElement = document.body;
      shakeElement?.classList.remove('shake');
      void shakeElement?.offsetWidth; // Funky trick to allow the screen shake
      shakeElement?.classList.add('shake');
      // CSS SHIT

      return true;
    } else {
      return false;
    }
  }

  //what!?!?! it also knows if it's dead?!?!?!
  isDead() {
    if(this.lives <= 0) {
      // TODO
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
