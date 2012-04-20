re.c('acid')
.requires('item flicker')
.defines({
  
  touch:function(){
      re.scene('home').enter();
      this.off();
  }
  
})
.init(function(){
    this.addFlicker('acidboil', -1, 500, '16 17 18');
    this.flicker('acidboil');
  
    this.comp('acid');
})
//used to place it in level.js
.alias('t16')
.alias('t17')
.alias('t18');
