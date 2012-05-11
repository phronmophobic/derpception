re.scene('home')
.enter(function(){
    re.e('text')
        .attr({
            text:'Boo >:D! You can cry or press space',
            textColor:'#000000',
            posX:300,
            posY:300,
            font:'60px'
        });
    this.keyboard = re.e('keyboard')
        .on('keydown:space', function(key, event){
            re.scene('play').enter('level01');
        });
  
})
.exit(function(){
    this.keyboard.off();
  
  
});
