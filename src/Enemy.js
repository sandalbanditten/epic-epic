class Enemy
{
  constructor(size, type, speed)
  {
    this.diameter = size + random(-10,10);
    this.type = type;
    this.speed = speed;

    this.x1 = 0 - this.diameter/2;
    this.x2 = width + this.diameter/2;
    this.x = this.x1;

    this.y1 = random(0 + this.diameter/2, height - this.diameter/2);
    this.y2 = random(0 + this.diameter/2, height - this.diameter/2);

  }

  show()
  {
    push();
    fill(123, 44, 191);
    circle(this.x, this.y, this.diameter);
    pop();
  }
}
