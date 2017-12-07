import buttonModule = require("ui/button");
import RockUser from './RockUser';
import Event from '../../event/Event';

let selected: number = -1;

export const setSelected = num => {
    selected = num;
};

export const getSelected = () => {
    return selected;
};

export class RockModel {

    private user1;
    private user2;
    private refersh;

    constructor(page) {
        this.user1 = new RockUser(page, "user1");
        this.user2 = new RockUser(page, "user2");
        this.refersh = page.getViewById('refersh');
        this.eventSetting();
    }

    eventSetting() {
        this.refersh.on(buttonModule.Button.tapEvent, () => {
            this.user1.reset();
            this.user2.reset();
            setSelected(-1);
        });

        Event.on('VOLUME_UP', () => {
            this.user1.setWinner(1);
            this.user2.setWinner(0);
        });

        Event.on('VOLUME_DOWN', () => {
            this.user1.setWinner(0);
            this.user2.setWinner(1);
        });
    }
}