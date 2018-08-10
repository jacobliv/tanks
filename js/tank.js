class Tank{
  constructor(pos){
    this.pos=pos;
    this.r=15
    this.xOffset=0
    this.turret={angle:0,pos:new Vector(this.pos.x+this.r*2,this.pos.y-this.r)};
    this.bullets=[]
    this.cooldown=0
  }
  draw(){
    canvas.front.ctx.strokeStyle="rgb(170, 170, 170)"
    canvas.front.ctx.fillStyle="rgb(46, 46, 46)"

    canvas.front.ctx.beginPath()
    canvas.front.ctx.moveTo(this.pos.x,this.pos.y-this.r)
    canvas.front.ctx.lineTo(this.turret.pos.x,this.turret.pos.y)
    canvas.front.ctx.stroke()


    canvas.front.ctx.beginPath()
    canvas.front.ctx.arc(this.pos.x+this.xOffset,this.pos.y-this.r,this.r,0,2*Math.PI)
    canvas.front.ctx.fill()
    canvas.front.ctx.stroke()



  }

  shoot(){
    if(keyboard.space && this.cooldown<=0){
      let x=Math.cos(this.turret.angle)*5
      let y=Math.sin(this.turret.angle)*5
      let vel=new Vector(x,y)
      game.bullets.push(new Bullet(new Vector(this.pos.x,this.pos.y-this.r),vel))
      this.cooldown=50
    }
    this.cooldown--

  }

  rotate(){
    if(keyboard.up) this.turret.angle-=.05
    if(keyboard.down) this.turret.angle+=.05

  }

  moveTurret(){
    this.turret.pos.x=Math.cos(this.turret.angle)*25+this.pos.x
    this.turret.pos.y=Math.sin(this.turret.angle)*25+this.pos.y-this.r
  }

  move(){


    if(keyboard.left){
      if(game.ground.points[(this.pos.x-1)] == undefined || game.ground.points[(this.pos.x-1)].x<this.r) return
      this.pos=game.ground.points[(this.pos.x-1)]
      this.setOffset(0)
    }
    if(keyboard.right){
      if(game.ground.points[(this.pos.x+1)] == undefined || game.ground.points[(this.pos.x+1)].x>canvas.front.canvas.width-this.r) return
      this.pos=game.ground.points[(this.pos.x+1)]
      this.setOffset(1)
    }

  }
  setOffset(dir){
    if(dir){
      let lPoint=game.ground.points[(this.pos.x-1)]
      let angle=Math.atan2(lPoint.y-this.pos.y,lPoint.x-this.pos.x)

      if(angle <-.1){
        this.xOffset=+.8
      }
      else if(angle>.1){
        this.xOffset=-.8
      }
      else{
        this.xOffset=0
      }

    }
    else{
      let lPoint=game.ground.points[(this.pos.x+1)]
      let angle=Math.atan2(lPoint.y-this.pos.y,lPoint.x-this.pos.x)
      if(angle <-.1){
        this.xOffset=-.8
      }
      else if(angle>.1){
        this.xOffset=.8

      }
      else{
        this.xOffset=0
      }

    }



  }



}
