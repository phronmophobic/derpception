re.c('badguy')
.requires('big_baby.png tsprite update force flicker body')
.defines({
  
  speed:40 * re.sys.stepSize,
  
  friX:1.0,
  friY:0.95,
  
  padX:6,
  
  bodyX:267,
  bodyY:300,

  sizeX : 267,
  sizeY : 300,
  
  jumpSpeed:480 * re.sys.stepSize,
  jump:false,
  ground:true,
    velX : 0,
  
  update:function(){

  },
  
  forceJump:function(){
  },
  
  jumpReset:function(x, y, tx, ty){
  }
  
})
.init(function(){
  this.on({
    update:this.update,
  });

})
.dispose(function(){
  this.off();
});


