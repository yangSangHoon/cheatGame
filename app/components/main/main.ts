//import view = require("ui/core/view");
import buttonModule = require("ui/button");
import frameModule = require("ui/frame");

class MainPage{
    private btnRock;
    private btnFast;
    private topmost = frameModule.topmost();
    constructor(view){
        this.btnRock = view.getViewById('btnRock');
        this.btnFast = view.getViewById('btnFast');
        this.eventSetting();

        //test
        //this.goPushBall();
    }

    eventSetting(){
        this.btnRock.on(buttonModule.Button.tapEvent, () => {
            this.goRock();
        })
        this.btnFast.on(buttonModule.Button.tapEvent, () => {
            this.goPushBall();
        })
    }

    goRock() {
        this.topmost.navigate("components/rock/rock");
    }

    goFast() {

        this.topmost.navigate("components/fast/fast");
    }

    goPushBall() {
        this.topmost.navigate("components/pushBall/pushBall");
    }
}

export function onLoad(args: any) {
    new MainPage(args.object);
}