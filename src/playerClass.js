class Player {
    constructor(posX, posY, speed, size, lives) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.size = size;
        this.lives = lives;
    }

    update() {
        circle(posX - size/2, posY - size/2, size);
        if(keyIsDown(87)) {
            posY -= speed;
        }
        if(keyIsDown(83)) {
            posY += speed;
        }
        
        if(collisionCheck()) {
            lives--;
        }
        isDead();
    }

    collisionCheck() {
        if(dist(mouseX, mouseY, posX, posY) <= size/2) {
          return true;
        } else {
          return false;
        }
    }

    isDead() {
        if(lives <= 0) {
          return true;
        } else {
          return false;
        }
    }
}