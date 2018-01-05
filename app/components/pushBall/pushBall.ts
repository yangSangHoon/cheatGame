import buttonModule = require("ui/button");
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';
import Event from '../../event/Event';
import {getHeight} from "../../utils/utils";

class PushBall {

    private user1 = null;
    private user2 = null;
    private ball = null;
    private stage = null;
    private refresh = null;
    private timer = null;
    private restTime: number = 0;
    private currentTop = 0;

    private user1MoveNum = 10;
    private user2MoveNum = 10;

    private stageHeight: number = 0;
    private bottomEndTop: number = 0;
    private middleTop: number = 0;

    private interval;

    constructor(view) {
        this.user1 = view.getViewById('user1');
        this.user2 = view.getViewById('user2');
        this.ball = view.getViewById('ball');
        this.refresh = view.getViewById('refresh');
        this.stage = view.getViewById('stage');
        this.timer = view.getViewById('timer');
        this.init();
    }

    init() {
        this.user1.text = 'player1';
        this.user2.text = 'player2';
        this.refresh.visibility = 'collapsed';
        this.user1.backgroundColor = '#fff7d3';
        this.user2.backgroundColor = '#fff7d3';
        this.user1.color = '#000';
        this.user2.color = '#000';
        this.restTime = 15;
        this.setTime();
        this.setPosition();
        this.eventSetting();
        this.playTimer();
    }

    setTime() {
        this.timer.text = this.restTime;
    }


    playTimer() {
        this.interval = setInterval(() => {
            this.restTime--;
            this.setTime();
            if (this.restTime === 0) {
                this.gameOver();
            }
        }, 1000)
    }

    setPosition() {
        const playerHeight = getHeight(this.user1);
        const ballHeight = getHeight(this.ball);
        this.stageHeight = getHeight(this.stage);
        this.bottomEndTop = this.stageHeight - ballHeight;
        this.middleTop = this.stageHeight/2 - ballHeight/2;
        this.currentTop = this.middleTop;
        AbsoluteLayout.setTop(this.ball, this.currentTop);
        AbsoluteLayout.setTop(this.refresh, this.currentTop);
        AbsoluteLayout.setTop(this.user2, this.stageHeight - playerHeight);
    }

    eventSetting() {
        this.user1.on(buttonModule.Button.tapEvent, () => {
            this.moveBall(this.user1MoveNum);
            if (this.currentTop > this.bottomEndTop) {
                AbsoluteLayout.setTop(this.ball, this.bottomEndTop);
                this.gameOver();

            }
        });

        this.user2.on(buttonModule.Button.tapEvent, () => {
            this.moveBall(-this.user2MoveNum);
            if (this.currentTop < 0) {
                AbsoluteLayout.setTop(this.ball, 0);
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

    checkWinner(){
        if (this.currentTop > this.middleTop) {
            this.user1.text = 'winner';
            this.user2.text = 'loser';
        }else{
            this.user1.text = 'loser';
            this.user2.text = 'winner';
        }
    }

    gameOver() {
        this.user1.off(buttonModule.Button.tapEvent);
        this.user2.off(buttonModule.Button.tapEvent);
        this.user1.backgroundColor = '#333';
        this.user2.backgroundColor = '#333';
        this.user1.color = '#fff';
        this.user2.color = '#fff';
        this.refresh.visibility = 'visible';

        clearInterval(this.interval);
        this.checkWinner();
    }

    moveBall(value) {
        this.currentTop += value;
        AbsoluteLayout.setTop(this.ball, this.currentTop);
    }
}

exports.navigated = function (args) {
    new PushBall(args.object);
};
