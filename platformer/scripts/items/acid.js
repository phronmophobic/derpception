
for(var __i = 16; __i <= 19; __i++){
    defineAcid(__i);
}



function defineAcid(frameId){

    re.c('acid'+frameId)
        .requires('item flicker')
        .defines({
            
            touch:function(){
                re.scene('home').enter();
                this.off();
            }
            
        })
        .init(function(){
            // debugger;
            if ( frameId != 16 ){
                var animation_frames = [17,18,19,17,18,19].slice(3 - (19-frameId) -1 , 3 - (19-frameId) -1+3);
                this.addFlicker('acidboil', -1, 500, animation_frames)
                this.flicker('acidboil');
            }
            
            this.comp('acid'+frameId);
        })
    //used to place it in level.js
        .alias('t' + frameId);
}
