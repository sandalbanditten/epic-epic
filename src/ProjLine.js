class ProjLine
{
    constructor()
    {
        this.size = random(50,150);
        
        this.x1 = 0 + this.size;
        this.x2 = width - this.size;
        
        this.y1 = random(0 + this.size, height - this.size);
        this.y2 = random(0 + this.size, height - this.size);

        console.log(this.x1 + width/2);
        console.log(this.size);
        console.log(this.y2);

    }

    show()
    {
        //circle(this.x1-this.x2/2, this.y1-this.y2/2, this.size);
        circle(this.x1 + width/2, this.y2, this.size*2);
        
    }
}