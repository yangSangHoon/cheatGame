"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import view = require("ui/core/view");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var MainPage = (function () {
    function MainPage(view) {
        this.btnRock = view.getViewById('btnRock');
        this.btnFast = view.getViewById('btnFast');
        this.eventSetting();
        //test
        //this.goPushBall();
    }
    MainPage.prototype.eventSetting = function () {
        var _this = this;
        this.btnRock.on(buttonModule.Button.tapEvent, function () {
            var topmost = frameModule.topmost();
            topmost.navigate("components/rock/rock");
        });
        this.btnFast.on(buttonModule.Button.tapEvent, function () {
            _this.goPushBall();
        });
    };
    MainPage.prototype.goFast = function () {
        var topmost = frameModule.topmost();
        topmost.navigate("components/fast/fast");
    };
    MainPage.prototype.goPushBall = function () {
        var topmost = frameModule.topmost();
        topmost.navigate("components/pushBall/pushBall");
    };
    return MainPage;
}());
function onLoad(args) {
    new MainPage(args.object);
}
exports.onLoad = onLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMsd0NBQTJDO0FBQzNDLHNDQUF5QztBQUV6QztJQUlJLGtCQUFZLElBQUk7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixNQUFNO1FBQ04sb0JBQW9CO0lBQ3hCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDMUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0ksSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFFRCxnQkFBdUIsSUFBUztJQUM1QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUZELHdCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7XG5pbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcblxuY2xhc3MgTWFpblBhZ2V7XG4gICAgcHJpdmF0ZSBidG5Sb2NrO1xuICAgIHByaXZhdGUgYnRuRmFzdDtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcpe1xuICAgICAgICB0aGlzLmJ0blJvY2sgPSB2aWV3LmdldFZpZXdCeUlkKCdidG5Sb2NrJyk7XG4gICAgICAgIHRoaXMuYnRuRmFzdCA9IHZpZXcuZ2V0Vmlld0J5SWQoJ2J0bkZhc3QnKTtcbiAgICAgICAgdGhpcy5ldmVudFNldHRpbmcoKTtcblxuICAgICAgICAvL3Rlc3RcbiAgICAgICAgLy90aGlzLmdvUHVzaEJhbGwoKTtcbiAgICB9XG5cbiAgICBldmVudFNldHRpbmcoKXtcbiAgICAgICAgdGhpcy5idG5Sb2NrLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XG4gICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50cy9yb2NrL3JvY2tcIik7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYnRuRmFzdC5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdvUHVzaEJhbGwoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnb0Zhc3QoKSB7XG4gICAgICAgIGNvbnN0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XG4gICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnRzL2Zhc3QvZmFzdFwiKTtcbiAgICB9XG5cbiAgICBnb1B1c2hCYWxsKCkge1xuICAgICAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xuICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50cy9wdXNoQmFsbC9wdXNoQmFsbFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoYXJnczogYW55KSB7XG4gICAgbmV3IE1haW5QYWdlKGFyZ3Mub2JqZWN0KTtcbn0iXX0=