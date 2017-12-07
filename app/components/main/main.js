"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var MainPage = (function () {
    function MainPage(view) {
        this.btnRock = view.getViewById('btnRock');
        this.eventSetting();
    }
    MainPage.prototype.eventSetting = function () {
        this.btnRock.on(buttonModule.Button.tapEvent, function () {
            var topmost = frameModule.topmost();
            topmost.navigate("components/rock/rock");
        });
    };
    return MainPage;
}());
function onLoad(args) {
    new MainPage(args.object);
}
exports.onLoad = onLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx3Q0FBMkM7QUFDM0Msc0NBQXlDO0FBRXpDO0lBR0ksa0JBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQUVELGdCQUF1QixJQUFTO0lBQzVCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsd0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmlldyA9IHJlcXVpcmUoXCJ1aS9jb3JlL3ZpZXdcIik7XG5pbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcblxuY2xhc3MgTWFpblBhZ2V7XG4gICAgcHJpdmF0ZSBidG5Sb2NrO1xuXG4gICAgY29uc3RydWN0b3Iodmlldyl7XG4gICAgICAgIHRoaXMuYnRuUm9jayA9IHZpZXcuZ2V0Vmlld0J5SWQoJ2J0blJvY2snKTtcbiAgICAgICAgdGhpcy5ldmVudFNldHRpbmcoKTtcbiAgICB9XG5cbiAgICBldmVudFNldHRpbmcoKXtcbiAgICAgICAgdGhpcy5idG5Sb2NrLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvcG1vc3QgPSBmcmFtZU1vZHVsZS50b3Btb3N0KCk7XG4gICAgICAgICAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50cy9yb2NrL3JvY2tcIik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKGFyZ3M6IGFueSkge1xuICAgIG5ldyBNYWluUGFnZShhcmdzLm9iamVjdCk7XG59Il19