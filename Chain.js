class Chain{
    constructor(body1, body2, offsetX, offsetY){
          this.offsetX= offsetX
          this.offsetY= offsetY

        var options ={
            bodyA:body1,
            bodyB:body2,
            length:20,
            stiffness:1
        }
        this.Chain = Constraint.create(options)
        World.add(world, this.Chain)
        this.bodyA = body1
        this.bodyB = body2
    }
    display(){
        var pointA = this.bodyA.position
        var pointB = this.bodyB.position
        strokeWeight(9)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }

}