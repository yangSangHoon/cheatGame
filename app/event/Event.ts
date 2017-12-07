let instance = null;

class Event {

    private dispatchedDatas: object = {};
    private funcCues: object = {};

    constructor() {
        if (!instance) {
            instance = this;
        }
        this.init();
        return instance;
    }

    init() {
        this.dispatchedDatas = {};
        this.funcCues = {};
    }

    on(mutationType, func) {
        if (this.dispatchedDatas[mutationType]) {
            func();
        } else {
            if (!this.funcCues[mutationType]) {
                this.funcCues[mutationType] = [];
            }
            this.funcCues[mutationType].push(func);
        }
    }

    initData(mutationType){
        this.dispatchedDatas[mutationType] = null;
    }

    dispatch(mutationType) {
        this.dispatchedDatas[mutationType] = true;
        if (this.funcCues[mutationType]) {
            for (const func of this.funcCues[mutationType]) {
                func();
            }
            this.funcCues[mutationType] = null;
        }
    }
}

export default new Event();

