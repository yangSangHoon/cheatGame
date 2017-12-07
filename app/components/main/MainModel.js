"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var MainModel = (function () {
    function MainModel(page) {
        this.btnRock = page.getViewById('btnRock');
        console.log('this.btnRock', this.btnRock);
        this.eventSetting();
    }
    MainModel.prototype.eventSetting = function () {
        this.btnRock.on(buttonModule.Button.tapEvent, function () {
            alert(1);
        });
    };
    return MainModel;
}());
exports.MainModel = MainModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbk1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFpbk1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBRTNDO0lBR0MsbUJBQVksSUFBSTtRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5cbmV4cG9ydCBjbGFzcyBNYWluTW9kZWwge1xuXHRwcml2YXRlIGJ0blJvY2s7XG5cblx0Y29uc3RydWN0b3IocGFnZSl7XG5cdFx0dGhpcy5idG5Sb2NrID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuUm9jaycpO1xuXHRcdGNvbnNvbGUubG9nKCd0aGlzLmJ0blJvY2snLCB0aGlzLmJ0blJvY2spO1xuXHRcdHRoaXMuZXZlbnRTZXR0aW5nKCk7XG5cdH1cblxuXHRldmVudFNldHRpbmcoKSB7XG5cdFx0dGhpcy5idG5Sb2NrLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KDEpO1xuICAgICAgICB9KVx0XG5cdH1cbn0iXX0=