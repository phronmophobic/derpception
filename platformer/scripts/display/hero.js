re.c('hero')
.requires('derp_cut.png tsprite update force flicker body')
.defines({
  
  speed:40 * re.sys.stepSize,
  
  friX:1.0,
  friY:0.95,
  
  padX:6,
  
  bodyX:64,
  bodyY:135,

  sizeX : 64,
  sizeY : 135,
  
  jumpSpeed:480 * re.sys.stepSize,
  jump:false,
  ground:true,
  velX : 100 * re.sys.stepSize,
  
  update:function(){
    // this.velX = 10*this.speed;
    //jump
    if(this.ground && !this.jump && re.pressed('up')){
      this.forceJump();
    }
    
    //walk back and fourth
    if(re.pressed('left')){
      this.velX -= this.speed;
      this.scaleX = -1;
      
      // if(!this.jump) this.flicker('run');
    }
    
    if(re.pressed('right')){
      this.velX += this.speed;
      this.scaleX = 1;
      
      // if(!this.jump) this.flicker('run');
    }
    
    //switch back to idle animation if stopped moving
    // if(this.isIdle(0.3)) this.flicker('idle');

    re.screen.pos(this.posX-25*10, re.screen.posY);
  },
  
  forceJump:function(){
    this.jump = true;
    this.velY -= this.jumpSpeed;
    
    // this.flicker('jump');
  },
  
  jumpReset:function(x, y, tx, ty){
    //check if a hit happened on the y axis
    if(y){
      this.jump = false;
      this.ground = (ty >= this.posY);
    }
  }
  
})
.init(function(){
  //add animations
  // this.addFlicker({
  //         idle:[-1, 600, [0, 1]],
  //         run:[-1, 800, [2, 3]],
  //         jump:[1, 500, [4, 5, 4]],
  //         ladder:[-1, 500, [6, 7]]
  //       });
  
  this.on({
    update:this.update,
    aftermath:this.jumpReset
  });

})
.dispose(function(){
  this.off();
});

