class Box extends  Common {
    constructor(x, y, width, height){
      
      super(x,y,width,height);

      this.visibility=255;
    }
    display(){
    if(this.body.speed<20){

      super.display();
     }else{
       World.remove(world,this.body) ;

       push();
       
       tint(255,this.visibility);

       this.visibility=this.visibility-10 ;

       rectMode(CENTER);

        rect(this.body.position.x,this.body.position.y,this.width,this.height);

       pop();
     
     }
    }
  };
  