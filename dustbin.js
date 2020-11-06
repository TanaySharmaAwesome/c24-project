class bin{
   constructer(x,y,witdh,height){
      var options={
         isStatic:true,
         restitution:0.3,
         friction:0.5,
         density:1.2
          }
          this.x=x;
          this.y=y;
          this.width=witdh;
          this.height=height;

          this.body=Bodies.rectangle(x,y,witdh,height,options);
          World.add(world,this.body) 
        }
      display(){
          var binpos=this.body.position;
      
          push()
          translate(binpos.x,binpos.y);
          rectMode(CENTER)
          strokeWeight(3);
          fill(255,0,255)
          ellipse(0,0,witdh,height)
          pop()
      
      }
 

 
}