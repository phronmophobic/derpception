    re.c('spike')
        .requires('item flicker')
        .defines({
            
            touch:function(){
                re.scene('home').enter();
                this.off();
            }
            
        })
        .init(function(){

            this.comp('spike');
        })
    //used to place it in level.js
        .alias('t5');
