class Block {
    constructor(x,y,width,height) {
       var ground_options = {
            isStatic: false,
           // density:10,
            //friction:2
        }
        this.width =width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.image = loadImage("assets/blockcrate.jpg")
        World.add(world,this.body);
       
    }
    display() {
      push()
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop()
      
  }
  }