import buttonModule = require("ui/button");
import {setSelected, getSelected} from './RockModel';

export default class RockUser {

    private user;
    private imgUrl: string = '';
    private imgUrls: Array<string> = ['~/images/scssors.png', '~/images/rock.png', '~/images/paper.png'];
    private timer;
    private imgNum: number = 0;
    private isWinner: number = -1;

    constructor(page, id) {
        this.user = page.getViewById(id);

        this.imgUrl = this.imgUrls[0];
        this.startRolling();
        this.eventsetting();
    }

    eventsetting() {
        this.user.on(buttonModule.Button.tapEvent, () => {
            clearInterval(this.timer);
            this.select();
        })
    }

    select() {
        this.user.off(buttonModule.Button.tapEvent);
        const selectedNum = getSelected();
        let num: number;

        if( this.isWinner > -1 && selectedNum > -1 ){
            num = (selectedNum + (this.isWinner === 1 ? 1 : 2))%3;
        } else {
            num = Math.floor(Math.random() * this.imgUrls.length);
        }

        this.user.src = this.imgUrls[num];
        setSelected(num);

    }

    setWinner(isWinner) {
        this.isWinner = isWinner;
    }

    startRolling() {
        this.timer = setInterval(() => {
            this.imgNum = (this.imgNum + 1) % 3;
            this.user.src = this.imgUrls[this.imgNum];
            if (this.imgNum === 2) {
                this.user.width = '40%';
            } else {
                this.user.width = '35%';
            }
        }, 100);
    }

    reset() {
        clearInterval(this.timer);
        this.startRolling();
        this.eventsetting();
    }
}