import view = require("ui/core/view");
import buttonModule = require("ui/button");
import frameModule = require("ui/frame");
import viewBuilder = require("ui/builder");

class Fast{
    private user1;
    private user2;

    constructor(page){
        const layout = page.getViewById('fastLayout');
        this.user1 = viewBuilder.load({ path: 'components/fast/user', name: 'user' });
        this.user2 = viewBuilder.load({ path: 'components/fast/user', name: 'user' });
        layout.addChild(this.user1);
        layout.addChild(this.user2);
    }

    init() {
    }
}

export function onLoad(args: any) {
    new Fast(args.object);
}