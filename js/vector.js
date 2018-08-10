class Vector{
  constructor(x,y){
    this.x=x||0;
    this.y=y||0;
  }
  // Add a vector to another
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  // Gets the length of the vector
  getMagnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  // Gets the angle accounting for the quadrant we're in
  getAngle() {
    return Math.atan2(this.y,this.x);
  };

  static fromAngle(angle, magnitude) {
    return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
  };
}
