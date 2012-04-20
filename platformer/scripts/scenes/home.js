re.scene('home')
.enter(function(){
  
    this.keyboard = re.e('keyboard')
        .on('keydown:space', function(key, event){
            re.scene('play').enter('level01');
        });
  
})
.exit(function(){
    this.keyboard.off();
  
  
});
