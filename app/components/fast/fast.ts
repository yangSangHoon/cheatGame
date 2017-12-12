import view = require("ui/core/view");
import buttonModule = require("ui/button");
import frameModule = require("ui/frame");

class Fast{
    private user1;
    private user2;

    constructor(view){
        this.user1 = view.getViewById('user1');
        this.user2 = view.getViewById('user2');
    }

    init() {
    }
}

export function onLoad(args: any) {
    new Fast(args.object);
}