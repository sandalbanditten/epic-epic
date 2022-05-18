class Liniar extends Enemy
{
  constructor(size)
  {
    super(size);
  }

  update()
  {
    this.a = (this.y1 - this.y2)/(this.x1 - this.x2);
    this.b = this.y1;

    this.y = this.a * this.x + this.b;

    this.x += this.speed;
  }
}
