re.c('badguy')
.requires('item tsprite update force flicker body')
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
  
  touch:function(){
      re.scene('home').enter();
      this.off();
      
  }
})
.init(function(){

})


re.c('monopolyman')
.requires('badguy monopolyman.png')
.defines({
  bodyX:333,
  bodyY:350,
  sizeX : 333,
  sizeY : 350,
    velX : 10,
  update:function(){
      // this.velX = this.hero.velX;
      // this.velY = this.hero.velY;
      this.velX *= 8/Math.abs(this.velX);
      if (Math.random() > 0.95 ){
          this.velX *= -1;
      }
      
  },
})
.init(function(){
  this.on({
    update:this.update,
  });


})
.dispose(function(){
  this.off();
});
