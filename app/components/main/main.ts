import view = require("ui/core/view");
import buttonModule = require("ui/button");
import frameModule = require("ui/frame");

class MainPage{
    private btnRock;

    constructor(view){
        this.btnRock = view.getViewById('btnRock');
        this.eventSetting();
    }

    eventSetting(){
        this.btnRock.on(buttonModule.Button.tapEvent, () => {
            const topmost = frameModule.topmost();
            topmost.navigate("components/rock/rock");
        })
    }
}

export function onLoad(args: any) {
    new MainPage(args.object);
}