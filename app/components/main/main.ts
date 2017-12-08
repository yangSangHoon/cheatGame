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
    }

    eventSetting(){
        this.btnRock.on(buttonModule.Button.tapEvent, () => {
            const topmost = frameModule.topmost();
            topmost.navigate("components/rock/rock");
        })
        this.btnFast.on(buttonModule.Button.tapEvent, () => {
            const topmost = frameModule.topmost();
            topmost.navigate("components/fast/fast");
        })
    }
}

export function onLoad(args: any) {
    new MainPage(args.object);
}