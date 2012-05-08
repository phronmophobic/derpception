re.c('cloud')
.requires('item flicker')
.defines({
  
  touch:function(){
    this.hero.velY = -5;
		
		if(re.pressed('up')){
			this.hero.velY = -25;
		}
  },
    cloud_update:function(){
        for ( var i = 0; i < this.badguys.length; i ++){
            var bad = this.badguys[i];
	    if(bad.hitBody(this.posX, this.posY, this.sizeX, this.sizeY, 10, 0)){
		bad.velY = -25;
	    } 
        }
    }
  
})
.init(function(){
  //add animation, can also send a string instead of an array
  this.comp('cloud');
    this.on('update', this.cloud_update);
    this.badguys = re('badguy');
})
//used to place it in level.js
    .alias('t11');

