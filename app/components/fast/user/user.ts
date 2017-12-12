import buttonModule = require("ui/button");
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';

class User{
    private view;
    private btn;
    private move: number = 0;
    private player;

    constructor(view){
        this.view = view;
        this.btn = view.getViewById('btn');
        this.player = view.getViewById('player');
        this.move = Number(view.move);
        this.setPosition();
        this.eventSetting();
    }

    setPosition() {
        this.view.style.position='absolute';
        this.btn.style.position='absolute';
        this.player.style.position='absolute';
        if( this.move === 1 ){
            this.view.style.top=0;
        }else{
            this.view.style.top=500;
            this.btn.style.top='300px';
            this.player.style.top=300;
        }
    }

    eventSetting() {
        this.btn.on(buttonModule.Button.tapEvent, () => {
            const top = AbsoluteLayout.getTop(this.player);
            const tarTop = Number(top) + 1;   
            console.log(tarTop);
            AbsoluteLayout.setTop(this.player, tarTop);
            //this.player.top = ( Number(this.player.style.top) + this.move );
        })
    }

    setMove(value) {

    }
}


export function onLoad(args: any) {
    new User(args.object);
}
