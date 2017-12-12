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
        this.goFast();
    }
    MainPage.prototype.eventSetting = function () {
        var _this = this;
        this.btnRock.on(buttonModule.Button.tapEvent, function () {
            var topmost = frameModule.topmost();
            topmost.navigate("components/rock/rock");
        });
        this.btnFast.on(buttonModule.Button.tapEvent, function () {
            _this.goFast();
        });
    };
    MainPage.prototype.goFast = function () {
        var topmost = frameModule.topmost();
        topmost.navigate("components/fast/fast");
    };
    return MainPage;
}());
function onLoad(args) {
    new MainPage(args.object);
}
exports.onLoad = onLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMsd0NBQTJDO0FBQzNDLHNDQUF5QztBQUV6QztJQUlJLGtCQUFZLElBQUk7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixNQUFNO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDMUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQUVELGdCQUF1QixJQUFTO0lBQzVCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsd0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcbmltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5jbGFzcyBNYWluUGFnZXtcbiAgICBwcml2YXRlIGJ0blJvY2s7XG4gICAgcHJpdmF0ZSBidG5GYXN0O1xuXG4gICAgY29uc3RydWN0b3Iodmlldyl7XG4gICAgICAgIHRoaXMuYnRuUm9jayA9IHZpZXcuZ2V0Vmlld0J5SWQoJ2J0blJvY2snKTtcbiAgICAgICAgdGhpcy5idG5GYXN0ID0gdmlldy5nZXRWaWV3QnlJZCgnYnRuRmFzdCcpO1xuICAgICAgICB0aGlzLmV2ZW50U2V0dGluZygpO1xuXG4gICAgICAgIC8vdGVzdFxuICAgICAgICB0aGlzLmdvRmFzdCgpO1xuICAgIH1cblxuICAgIGV2ZW50U2V0dGluZygpe1xuICAgICAgICB0aGlzLmJ0blJvY2sub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICAgICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnRzL3JvY2svcm9ja1wiKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5idG5GYXN0Lm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ29GYXN0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ29GYXN0KCkge1xuICAgICAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xuICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50cy9mYXN0L2Zhc3RcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGFyZ3M6IGFueSkge1xuICAgIG5ldyBNYWluUGFnZShhcmdzLm9iamVjdCk7XG59Il19