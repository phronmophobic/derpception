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
        if ( this.velX < -20 ){
            this.velX = -20;
        }
      this.scaleX = -1;
      
      // if(!this.jump) this.flicker('run');
    }
    
    if(re.pressed('right')){
      this.velX += this.speed;
        if ( this.velX > 20 ){
            this.velX = 20;
        }
      this.scaleX = 1;
      
      // if(!this.jump) this.flicker('run');
    }

      if ( re.pressed('space') ){
          var shot = re.e('shot').attr({
              frame: 3,
              posX: this.posX,
              posY: this.posY,
          });
      }
    
    //switch back to idle animation if stopped moving
    // if(this.isIdle(0.3)) this.flicker('idle');

    re.screen.pos(this.posX-25*10, 727);
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



re.c('shot')
.requires('items.png tsprite update force body')
.defines({
  friX:1.0,
    count : 0,
  update:function(){
      this.velY = -2.5;
      for ( var i = 0; i < this.badguys.length; i ++){
          var bad = this.badguys[i];
	  if(bad.hitBody(this.posX, this.posY, this.sizeX, this.sizeY, 10, 0)){
              this.hitBadguy(bad);
	  } 
      }
      if ( this.count++ > 30){
          this.dispose();
      }
  },
    hitBadguy:function(badguy){
        badguy.dispose();
    }
})
.init(function(){
  
  this.on({
    update:this.update,
  });
    this.badguys = re('badguy');
    this.hero = re('hero')[0];
    this.velX = this.hero.velX + 20;
    
    
})
.dispose(function(){
  this.off();
});



