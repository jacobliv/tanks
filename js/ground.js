class Ground{
  constructor(){
    this.points={};
    this.nextPoints={}
    this.perlins=[new Simple1DNoise(),new Simple1DNoise()]
    this.adjustRate=2
    this.offscreen=50
    this.sand=new Image()
    this.sand.src="./img/sand1.jpg"
    this.load=false;
    this.highest=canvas.ground.canvas.height
    this.createPoints()

  }
  createPoints(){
    for(let i=0;i<canvas.ground.canvas.width;i++){
      let y1=this.perlins[0].getVal(i)


      let y=(y1)*500+canvas.ground.canvas.height/2
      this.points[i]={x:i,y:y}
      if(y<this.highest){
        this.highest=y
      }
    }

    this.draw()

  }
  draw(){
    // canvas.ground.ctx.fillStyle="rgb(125, 125, 125)"
    canvas.ground.ctx.beginPath()
    canvas.ground.ctx.moveTo(-this.offscreen,canvas.ground.canvas.height+this.offscreen)
    canvas.ground.ctx.lineTo(-this.offscreen,this.points[Object.keys(this.points)[0]].y)
    for(let point in this.points){
      canvas.ground.ctx.lineTo(this.points[point].x,this.points[point].y,.4,0,2*Math.PI)
    }
    canvas.ground.ctx.lineTo(canvas.ground.canvas.width+this.offscreen,this.points[Object.keys(this.points)[Object.keys(this.points).length-1]].y)
    canvas.ground.ctx.lineTo(canvas.ground.canvas.width+this.offscreen,canvas.ground.canvas.height+this.offscreen)
    canvas.ground.ctx.lineTo(-this.offscreen,canvas.ground.canvas.height+this.offscreen)


    var pat=canvas.ground.ctx.createPattern(this.sand,"repeat");
    if(pat != null){
      this.load=true;
    }
    canvas.ground.ctx.fillStyle=pat

    canvas.ground.ctx.fill()

    var gradient = canvas.ground.ctx.createLinearGradient(canvas.ground.canvas.width/2, canvas.ground.canvas.height, canvas.ground.canvas.width/2, this.highest);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
    gradient.addColorStop(1, 'rgba(77, 75, 75, 0.37)');


    canvas.ground.ctx.fillStyle=gradient//"rgba(0, 0, 0, 0.37)"
    canvas.ground.ctx.fill()
    canvas.ground.ctx.globalCompositeOperation = 'multiply';

    canvas.ground.ctx.strokeStyle="rgb(255, 255, 255)"
    canvas.ground.ctx.lineWidth=2;
    canvas.ground.ctx.filter="blur(12px)"
    // canvas.ground.ctx.stroke()
    canvas.ground.ctx.filter="blur(0px)"
    canvas.ground.ctx.globalCompositeOperation = 'source-over';

  }


}
