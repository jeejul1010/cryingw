function Drop(a, b) {
  this.r=8;
  this.x=a;
  this.y=b;
  this.firstyPos = b;
  this.speed=random(1, 5);
  this.c=color(50, 100, 150);

  this.move = function() {
    this.y+=this.speed;
    if (this.y>height) {
      this.reset();
    }
  }
  this.display = function() {
    fill(this.c);
    noStroke();
    for (var i=2; i<this.r; i++) {
      ellipse(this.x, this.y+i*4, i*2, i*2);
    }
  }

  this.reset = function() {

    this.y=this.firstyPos;
  }
}
