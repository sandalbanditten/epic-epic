class ProjLine
{
    constructor()
    {
        this.diameter = random(50,150);
        
        this.x1 = 0 - this.diameter/2;
        this.x2 = width + this.diameter/2;
        this.x = this.x1;
        
        this.y1 = random(0 + this.diameter/2, height - this.diameter/2);
        this.y2 = random(0 + this.diameter/2, height - this.diameter/2);

        this.speed = 3;

        /*
        console.log(this.x1 + width/2);
        console.log(this.diameter/2);
        console.log(this.y2);
        */
    }

    show()
    {
        this.a = (this.y1 - this.y2)/(this.x1 - this.x2);
        this.b = this.y2;

        this.y = this.a * this.x + this.b

        fill(0,0,255)
        circle(this.x, this.y, this.diameter);
        this.x += this.speed;

        text(this.x + " " + this.y, width/2, height/2);
    }
}