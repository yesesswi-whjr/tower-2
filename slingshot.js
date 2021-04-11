class Launcher{
    constructor(body1, fixedpoint){
        var options = {
            bodyA: body1,
            pointB: fixedpoint,
            stiffness: 0.04,
            length: 10
        }
        this.fixedpoint =fixedpoint
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
      
    }
  attach(body){
this.launcher.bodyA=body;

  }






    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
         
            strokeWeight(3);
            stroke(48,22,8)
            


            line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y, this.fixedpoint.x,this.fixedpoint.y);
            
            
            
        }
       
    }
}  
