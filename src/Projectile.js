class Projectile
{
  constructor(size)
  {
    this.diameter = size + random(-10,10);
    this.type = 'liniar';

    this.x1 = 0 - this.diameter/2;
    this.x2 = width + this.diameter/2;
    this.x = this.x1;

    this.y1 = random(0 + this.diameter/2, height - this.diameter/2);
    this.y2 = random(0 + this.diameter/2, height - this.diameter/2);

    this.speed = 5;
  }
}