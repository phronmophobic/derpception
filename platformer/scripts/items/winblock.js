    re.c('winblock')
        .requires('item ')
        .defines({
            
            touch:function(){
                re.scene('win').enter();
                this.off();
            }
            
        })
        .init(function(){

            this.comp('win');
        })
    //used to place it in level.js
        .alias('t6');
