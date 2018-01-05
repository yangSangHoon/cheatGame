"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import view = require("ui/core/view");
var buttonModule = require("ui/button");
var frameModule = require("ui/frame");
var MainPage = (function () {
    function MainPage(view) {
        this.topmost = frameModule.topmost();
        this.btnRock = view.getViewById('btnRock');
        this.btnFast = view.getViewById('btnFast');
        this.eventSetting();
        //test
        //this.goPushBall();
    }
    MainPage.prototype.eventSetting = function () {
        var _this = this;
        this.btnRock.on(buttonModule.Button.tapEvent, function () {
            _this.goRock();
        });
        this.btnFast.on(buttonModule.Button.tapEvent, function () {
            _this.goPushBall();
        });
    };
    MainPage.prototype.goRock = function () {
        this.topmost.navigate("components/rock/rock");
    };
    MainPage.prototype.goFast = function () {
        this.topmost.navigate("components/fast/fast");
    };
    MainPage.prototype.goPushBall = function () {
        this.topmost.navigate("components/pushBall/pushBall");
    };
    return MainPage;
}());
function onLoad(args) {
    new MainPage(args.object);
}
exports.onLoad = onLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMsd0NBQTJDO0FBQzNDLHNDQUF5QztBQUV6QztJQUlJLGtCQUFZLElBQUk7UUFEUixZQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLE1BQU07UUFDTixvQkFBb0I7SUFDeEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQUVELGdCQUF1QixJQUFTO0lBQzVCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsd0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcbmltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5jbGFzcyBNYWluUGFnZXtcbiAgICBwcml2YXRlIGJ0blJvY2s7XG4gICAgcHJpdmF0ZSBidG5GYXN0O1xuICAgIHByaXZhdGUgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KXtcbiAgICAgICAgdGhpcy5idG5Sb2NrID0gdmlldy5nZXRWaWV3QnlJZCgnYnRuUm9jaycpO1xuICAgICAgICB0aGlzLmJ0bkZhc3QgPSB2aWV3LmdldFZpZXdCeUlkKCdidG5GYXN0Jyk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXR0aW5nKCk7XG5cbiAgICAgICAgLy90ZXN0XG4gICAgICAgIC8vdGhpcy5nb1B1c2hCYWxsKCk7XG4gICAgfVxuXG4gICAgZXZlbnRTZXR0aW5nKCl7XG4gICAgICAgIHRoaXMuYnRuUm9jay5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdvUm9jaygpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJ0bkZhc3Qub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nb1B1c2hCYWxsKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ29Sb2NrKCkge1xuICAgICAgICB0aGlzLnRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnRzL3JvY2svcm9ja1wiKTtcbiAgICB9XG5cbiAgICBnb0Zhc3QoKSB7XG5cbiAgICAgICAgdGhpcy50b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50cy9mYXN0L2Zhc3RcIik7XG4gICAgfVxuXG4gICAgZ29QdXNoQmFsbCgpIHtcbiAgICAgICAgdGhpcy50b3Btb3N0Lm5hdmlnYXRlKFwiY29tcG9uZW50cy9wdXNoQmFsbC9wdXNoQmFsbFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoYXJnczogYW55KSB7XG4gICAgbmV3IE1haW5QYWdlKGFyZ3Mub2JqZWN0KTtcbn0iXX0=