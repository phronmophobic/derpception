re.scene('start')
.enter(function(){
      this.bg = re.e('start2.jpg image draw').attr({
          posX: 0,
          posY: 0,
          screenable: false,
          visible: function(){ return true;}
      });
    this.keyboard = re.e('keyboard')
        .on('keydown:space', function(key, event){
            re.scene('play').enter('level01');
        });
  
})
.exit(function(){
    this.keyboard.off();
    this.bg.dispose();
  
  
});
