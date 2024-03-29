re.c('level')
.defines({
  
  build:function(){
    if(re.hitmap){
      re.hitmap.dispose();
    }
    re.hitmap = re.e('hitmap');
    
      // re.e('poopy.jpg image draw').attr({
      //     posX: 0,
      //     posY: 0,
      //     screenable: false,
      //     visible: function(){ return true;},
      //     scaleX : 2.1,
      // });
    this.placeTiles();
    
    this.placeHero();
    
      this.placeBadguys();

    //items requires hero to be defined first
    this.placeItems();

    
  },
  
  teardown:function(){
    //todo
  },
  
  placeTiles:function(){
    
    var map = this.layer.data.$;
    
    for(var y=0; y<map.length; y++){
      
      for(var x=0; x<map[0].length; x++){
        
        var v = map[y][x];
        
        if(v){
          v--;
          
         re.e('tile').attr({
          tileX:x,
          tileY:y,
          frame:v
          });
          
          //add to hitmap
          re.hitmap.automap(x, y, 1);
          
        }
        
      }
      
    }
    
  },
  
  placeItems:function(){

    var gid = this.tileset[1].firstgid;
    var items = this.objectgroup[1].object;

    for(var i in items){
      var it = items[i];
      
      var frame = items[i].gid - gid;
      
      re.e('t'+frame).attr({
        posX:it.x,
        posY:it.y - re.tile.sizeY,
        frame:frame
      });
      
    }
  },
  placeBadguys:function(){

      // debugger;
      // var badguyTileSet = null;
      // for ( var i = 0; i < this.tileset.length; i ++){
      //     if ( this.tileset["name"] == "
      // }
      // var gid = this.tileset[1].firstgid;
      var badguys = this.objectgroup[2].object;

      for(var i in badguys){
          var it = badguys[i];
          var width,height,name;
          for ( var j = 0; j < this.tileset.length; j ++){
              if ( it.gid == this.tileset[j].firstgid ){
                  width = this.tileset[j].tilewidth;
                  height = this.tileset[j].tileheight;
                  name = this.tileset[j].name;
                  break;
              }
          }
          
          // var frame = badguys[i].gid - gid;

          re.e(name).attr({
              posX:it.x,
              posY:it.y - 300, //tiled editor adds an extra tile to y
              
          });
          
      }
  },  
  placeHero:function(){
    
    var pos = this.objectgroup[0].object;
    
    re.e('hero')
    .attr({
      posX:pos.x,
      posY:pos.y - re.tile.sizeY //tiled editor adds an extra tile to y
    });
    
  }
  
});
