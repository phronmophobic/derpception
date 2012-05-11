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
    hp : 25,
  
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


re.c('big_baby')
.requires('badguy big_baby.png')
.defines({
  bodyX:267,
  bodyY:300,
  sizeX : 267,
  sizeY : 300,
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

re.c('pencil_mouth')
.requires('badguy pencil_mouth.png')
.defines({
  bodyX:272,
  bodyY:350,
  sizeX : 272,
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

re.c('mr_chicken')
.requires('badguy mr_chicken.png')
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

re.c('pretty_boy')
.requires('badguy pretty_boy.png')
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

re.c('propeller_head')
.requires('badguy propeller_head.png')
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

