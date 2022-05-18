class SinCos extends Enemy {
  constructor(size, type, speed) {
    super(size, type, speed);
    this.a = random(-height / 2, height / 2);
    this.b = 5;
  }

  update() {
    this.d = this.y1 - this.a * sin(this.b * (this.x2 - this.diameter/2));

    this.y = this.a * sin(this.b * (this.x)) + this.d;
    this.x += this.speed;
  }
}