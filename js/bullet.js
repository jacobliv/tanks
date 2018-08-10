class Bullet{
  constructor(pos,vel){
    this.pos=pos;
    this.vel=vel;
    this.r=10
    this.gravity=true
  }
  draw(){
    canvas.front.ctx.fillStyle="rgb(94, 74, 107)"
    canvas.front.ctx.beginPath()
    canvas.front.ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI)
    canvas.front.ctx.fill()

  }
  move(){
    this.pos.x+=this.vel.x;
    this.pos.y+=this.vel.y
    if(this.gravity){
      this.vel.y+=.1

    }
  }
  collide(){
    let x     = Math.floor(this.pos.x);
    let left  = x - 1;
    let right = x + 1;
    let angle = undefined;
    if(game.ground.points[x]){
      let dist=((this.pos.x-game.ground.points[x].x)**2+(this.pos.y-game.ground.points[x].y)**2)**.5
      // console.log(dist);
      if(dist<this.r){
        while(game.ground.points[left]==undefined){
          left++;
        }
        while(game.ground.points[right]==undefined){
          left--;
        }
        let angle = Math.atan2(game.ground.points[left].y-game.ground.points[right].y,game.ground.points[left].x-game.ground.points[right].x)
        let adjAgnle=angle-Math.PI

        let aBtP=Math.atan2(this.pos.y-game.ground.points[x].y,this.pos.x-game.ground.points[x].x)-Math.PI
        let xPos=Math.cos(aBtP)*dist+this.pos.x+this.r
        let yPos=Math.sin(aBtP)*dist+this.pos.y+this.r
        this.pos.x=xPos;
        this.pos.y=yPos;

        this.vel.x=Math.cos(adjAgnle)*this.vel.getMagnitude()
        this.vel.y=Math.sin(adjAgnle)*this.vel.getMagnitude()
        // this.gravity=false
        // console.log("here");

      }
    }

  }
}
