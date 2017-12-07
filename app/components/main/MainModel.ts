import buttonModule = require("ui/button");

export class MainModel {
	private btnRock;

	constructor(page){
		this.btnRock = page.getViewById('btnRock');
		console.log('this.btnRock', this.btnRock);
		this.eventSetting();
	}

	eventSetting() {
		this.btnRock.on(buttonModule.Button.tapEvent, () => {
            alert(1);
        })	
	}
}