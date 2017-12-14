import view = require("ui/core/view");
import buttonModule = require("ui/button");
import frameModule = require("ui/frame");
import viewBuilder = require("ui/builder");

class Fast{
    constructor(page){

    }

    init() {
    }
}

export function onLoad(args: any) {
    new Fast(args.object);
}