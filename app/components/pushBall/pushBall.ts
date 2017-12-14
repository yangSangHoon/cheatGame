import buttonModule = require("ui/button");
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';
import Event from '../../event/Event';

class PushBall{

    private user1 = null;
    private user2 = null;
    private ball = null;
    private stage = null;
    private refresh = null;
    private currentTop = 0;

    private user1MoveNum = 2;
    private user2MoveNum = 2;

    constructor(view) {
        this.user1 = view.getViewById('user1');
        this.user2 = view.getViewById('user2');
        this.ball = view.getViewById('ball');
        this.refresh = view.getViewById('refresh');
        this.stage = view.getViewById('stage');
        this.init();

    }

    init() {
        //this.refresh.visibility = false;
        this.currentTop = 250;
        AbsoluteLayout.setTop(this.ball, this.currentTop);
        this.eventSetting();
    }

    eventSetting() {
        this.user1.on(buttonModule.Button.tapEvent, () => {
            this.moveBall(this.user1MoveNum);
            if (this.currentTop > 480) {
                alert('player1 win');
                this.gameOver();
            }
        });

        this.user2.on(buttonModule.Button.tapEvent, () => {
            this.moveBall(-this.user2MoveNum);
            if (this.currentTop < 10) {
                alert('player2 win');
                this.gameOver();
            }
        });

        this.refresh.on(buttonModule.Button.tapEvent, () => {
           this.init();
        });

        Event.on('VOLUME_UP', () => {
            this.user1MoveNum = 100;
            this.user2MoveNum = 5;
        });

        Event.on('VOLUME_DOWN', () => {
            this.user1MoveNum = 5;
            this.user2MoveNum = 100;
        });
    }

    gameOver() {
        this.user1.off(buttonModule.Button.tapEvent);
        this.user2.off(buttonModule.Button.tapEvent);
        //this.refresh.visibility = true;
    }

    moveBall(value) {
        this.currentTop += value;
        AbsoluteLayout.setTop(this.ball, this.currentTop);
    }
}


export function onLoad(args: any) {
    new PushBall(args.object);
}

exports.fabTap = function (args) {
    console.log('fabTap');
    /*page = args.object;
    var bottle = page.getViewById("bottle");
    console.log("Height: " + bottle.height);*/
}