var canvas={ground:{canvas:undefined,ctx:undefined},front:{canvas:undefined,ctx:undefined},back:{canvas:undefined,ctx:undefined},fore:{canvas:undefined,ctx:undefined}}
var ground;
var perlin;
var tank;
var keyboard={left:false,right:false,up:false,down:false,space:false}
var mouse={}
var game;


$(document).ready(function(){
  canvas.back.canvas=document.getElementById("canvas1")
  canvas.ground.canvas=document.getElementById("canvas2")
  canvas.front.canvas=document.getElementById("canvas3")
  canvas.fore.canvas=document.getElementById("canvas4")
  resizeCanv()

  canvas.back.ctx=canvas.back.canvas.getContext("2d")
  canvas.ground.ctx=canvas.ground.canvas.getContext("2d")
  canvas.front.ctx=canvas.front.canvas.getContext("2d")
  canvas.fore.ctx=canvas.fore.canvas.getContext("2d")
  game=new Game()
  queue()
  // drawBalls()
})

function resizeCanv(){
  canvas.back.canvas.width=window.innerWidth
  canvas.back.canvas.height=window.innerHeight
  canvas.ground.canvas.width=window.innerWidth
  canvas.ground.canvas.height=window.innerHeight
  canvas.front.canvas.width=window.innerWidth
  canvas.front.canvas.height=window.innerHeight
  canvas.fore.canvas.width=window.innerWidth
  canvas.fore.canvas.height=window.innerHeight


}

function queue(){
  window.requestAnimationFrame(loop)
}

function loop(){
  addNew()
  clear()
  update()
  // checks()
  deletes()
  draw()
  queue()

}

function clear(){
  canvas.back.ctx.fillStyle="rgb(0, 0, 0)"
  canvas.back.ctx.fillRect(0,0,canvas.back.canvas.width,canvas.back.canvas.height)
  canvas.front.ctx.clearRect(0,0,canvas.front.canvas.width,canvas.front.canvas.height)
  canvas.fore.ctx.clearRect(0,0,canvas.fore.canvas.width,canvas.fore.canvas.height)

}

function addNew(){
  game.addNew()
}



function update(){
  game.update()
}

function checks(){

}


function draw(){
  game.draw()
}

function deletes(){
  game.deletes()
}





$(document).click(function(e){
  let rect={x:null,y:null}
  if(canvas!=undefined){
   rect=canvas.front.canvas.getBoundingClientRect()

  }
  mouse.x = e.clientX-rect.left;
  mouse.y = e.clientY-rect.top;

})

$(document).keydown(function(e){
  if(e.keyCode == 32){
    keyboard.space=true;
  }
  if(e.keyCode == 87){
    keyboard.up=true;
  }
  if(e.keyCode == 83){
    keyboard.down=true;
  }
  if(e.keyCode == 68){
    keyboard.right=true;
  }
  if(e.keyCode == 65){
    keyboard.left=true
  }
})

$(document).keyup(function(e){
  if(e.keyCode == 32){
    keyboard.space=false;
  }
  if(e.keyCode == 87){
    keyboard.up=false;
  }
  if(e.keyCode == 83){
    keyboard.down=false;
  }
  if(e.keyCode == 68){
    keyboard.right=false;
  }
  else if(e.keyCode == 65){
    keyboard.left=false
  }
})
