class Liniar extends Enemy
{
  constructor(size, type, speed, id)
  {
    super(size, type, speed);

    this.id = id;
    this.a = (this.y1 - this.y2)/(this.x1 - this.x2);
    this.b = this.y1;
  }

  update()
  {
    this.y = this.a * this.x + this.b;
    this.x += this.speed;
  }
}
