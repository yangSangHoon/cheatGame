import buttonModule = require("ui/button");
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';
export const top = 100;

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
    }

    eventSetting() {
        this.btn.on(buttonModule.Button.tapEvent, () => {
            AbsoluteLayout.setTop(this.player, Number(this.player.top) + 5);
        })
    }

    setMove(value) {

    }
}


export function onLoad(args: any) {
    new User(args.object);
}
