class ProjLine
{
    constructor(size)
    {
        this.diameter = size + random(-10,10);
        
        this.x1 = 0 - this.diameter/2;
        this.x2 = width + this.diameter/2;
        this.x = this.x1;
        
        this.y1 = random(0 + this.diameter/2, height - this.diameter/2);
        this.y2 = random(0 + this.diameter/2, height - this.diameter/2);

        this.speed = 3;
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