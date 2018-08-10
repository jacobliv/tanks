class Game{
  constructor(){
    this.ground=new Ground();
    this.tank=new Tank(this.ground.points[Object.keys(this.ground.points)[Math.floor(Object.keys(this.ground.points).length/2)]]);
    this.bullets=[]
  }

  update(){
    this.tank.move()
    this.tank.rotate()
    this.tank.moveTurret()
    this.tank.shoot()
    for(let bullet of this.bullets){
      bullet.move()
      bullet.collide()
    }

  }

  draw(){
    if(!this.ground.load){
      this.ground.draw()
    }
    this.tank.draw()
    for(let bullet of this.bullets){
      bullet.draw()
    }
  }

  deletes(){

  }

  addNew(){

  }
}
