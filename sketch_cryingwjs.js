var img;
var ldrops, rdrops;
var state;

function preload() {
  img = loadImage("assets/picapica.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  ldrops=new Drop(width/3+30,height/3);
  rdrops=new Drop(width/2+50, height/3-5);
  state = 0;
}

function draw() {
  image(img, 0,0);
  if(state == 1){
    ldrops.move();
    ldrops.display();
     }
  if(state == 2){
    rdrops.move();
    rdrops.display();
  }
}

function keyPressed(){

    if(keyCode == LEFT_ARROW) {
      state = 1;
      ldrops.reset();
      }
    
    else if(keyCode == RIGHT_ARROW) {
      state = 2;
      rdrops.reset();
    }
    else {
      state = 0;
    }

}
        
    
