class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.body.w = width;
        this.body.h = height;
        World.add(world, this.body);
    }
    display(){
        var pos =   this.body.position;

        fill("grey");
        rectMode(CENTER);
        rect(pos.x,pos.y,  this.body.w,  this.body.h);
    }
}