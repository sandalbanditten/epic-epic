class ProjLine extends Projectile
{
  constructor(size)
  {
    super(size);
  }

  show()
  {
    push();
    fill(123, 44, 191);
    circle(this.x, this.y, this.diameter);
    pop();
  }

  update()
  {
    this.a = (this.y1 - this.y2)/(this.x1 - this.x2);
    this.b = this.y1;

    this.y = this.a * this.x + this.b;

    this.x += this.speed;
  }
}
