re.scene('win')
.enter(function(){
      this.bg = re.e('win.jpg image draw').attr({
          posX: 0,
          posY: 0,
          screenable: false,
          visible: function(){ return true;}
      });
  
})
.exit(function(){
    this.keyboard.off();
    this.bg.dispose();
  
  
});
