class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB;

        this.sling = Constraint.create(options);

       

        World.add(world, this.sling);

       
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }

    display(){
       
        //image(polygon_img,polygon.position.x,polygon.position.y,40,40);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
           stroke(48,22,8); 
            line(pointA.x-15, pointA.y, pointB.x-20, pointB.y+10);
            line(pointA.x-15, pointA.y, pointB.x+20, pointB.y+15);
           
        }
       
           
          
    }
    
}