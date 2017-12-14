//import view = require("ui/core/view");
import buttonModule = require("ui/button");
import frameModule = require("ui/frame");

class MainPage{
    private btnRock;
    private btnFast;

    constructor(view){
        this.btnRock = view.getViewById('btnRock');
        this.btnFast = view.getViewById('btnFast');
        this.eventSetting();

        //test
        //this.goPushBall();
    }

    eventSetting(){
        this.btnRock.on(buttonModule.Button.tapEvent, () => {
            const topmost = frameModule.topmost();
            topmost.navigate("components/rock/rock");
        })
        this.btnFast.on(buttonModule.Button.tapEvent, () => {
            this.goPushBall();
        })
    }

    goFast() {
        const topmost = frameModule.topmost();
        topmost.navigate("components/fast/fast");
    }

    goPushBall() {
        const topmost = frameModule.topmost();
        topmost.navigate("components/pushBall/pushBall");
    }
}

export function onLoad(args: any) {
    new MainPage(args.object);
}