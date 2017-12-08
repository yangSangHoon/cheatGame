import buttonModule = require("ui/button");

class User{
    private btn;

    constructor(page){
        this.btn = page.getViewById('btn');
        this.eventSetting();
    }

    eventSetting() {
        this.btn.on(buttonModule.Button.tapEvent, () => {
            alert(1);
        })
    }

    move(){
        alert('move');
    }
}


export function onLoad(args: any) {
    return new User(args.object);
}

export function move(value){
    alert(value)
}