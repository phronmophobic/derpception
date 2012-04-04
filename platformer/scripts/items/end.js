re.c('end')
.requires('item flicker')
.defines({
  
  touch:function(){
      // this.hero.die();

      re.scene('home').enter();
      this.off();
  },
  
})
.init(function(){
})
.dispose(function(){
  this.off();
})
.alias('t4');

