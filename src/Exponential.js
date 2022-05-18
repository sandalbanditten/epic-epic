class Exponential extends Enemy
{
  constructor(size, type, speed)
  {
    super(size, type, speed);
    this.a = pow(this.y1 / this.y2, 1 / (this.x1 - this.x2));
    this.b = this.y1 / pow(this.a, this.x1);
  }
  
  update()
  {
    this.y = this.b * pow(this.a, this.x)
    this.x += this.speed;
  }
}