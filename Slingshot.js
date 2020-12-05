class SlingShot{
    constructor(body1, body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options = {
            bodyA: body1,
           bodyB: body2,
           pointB:{x:this.offsetX,y:this.offsetY}
           
        }
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slingshot1 = Constraint.create(options);
        World.add(world, this.slingshot1);
        this.slingshot2 = Constraint.create(options);
        World.add(world, this.slingshot2);
        this.slingshot3 = Constraint.create(options);
        World.add(world, this.slingshot3);
        this.slingshot4 = Constraint.create(options);
        World.add(world, this.slingshot4);
        this.slingshot5 = Constraint.create(options);
        World.add(world, this.slingshot5);
        
        

      
        
	slingshot1 = new Slingshot(bob1.body,ground.body,10,0);
	slingshot1 = new Slingshot(bob1.body,ground.body,-10,0);
	slingshot1 = new Slingshot(bob1.body,ground.body,-10,0);
	slingshot1 = new Slingshot(bob1.body,ground.body,-10,0);
	slingshot1 = new Slingshot(bob1.body,ground.body,-10,0);
    }

   
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
        slingshot1.display()
        slingshot2.display()
        slingshot3.display()
        slingshot4.display()   
        slingshot5.display()    
    }
    
}