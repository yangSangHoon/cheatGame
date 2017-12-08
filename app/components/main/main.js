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
    }
    MainPage.prototype.eventSetting = function () {
        this.btnRock.on(buttonModule.Button.tapEvent, function () {
            var topmost = frameModule.topmost();
            topmost.navigate("components/rock/rock");
        });
        this.btnFast.on(buttonModule.Button.tapEvent, function () {
            var topmost = frameModule.topmost();
            topmost.navigate("components/fast/fast");
        });
    };
    return MainPage;
}());
function onLoad(args) {
    new MainPage(args.object);
}
exports.onLoad = onLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMsd0NBQTJDO0FBQzNDLHNDQUF5QztBQUV6QztJQUlJLGtCQUFZLElBQUk7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzFDLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBRUQsZ0JBQXVCLElBQVM7SUFDNUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHZpZXcgPSByZXF1aXJlKFwidWkvY29yZS92aWV3XCIpO1xuaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG5cbmNsYXNzIE1haW5QYWdle1xuICAgIHByaXZhdGUgYnRuUm9jaztcbiAgICBwcml2YXRlIGJ0bkZhc3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3KXtcbiAgICAgICAgdGhpcy5idG5Sb2NrID0gdmlldy5nZXRWaWV3QnlJZCgnYnRuUm9jaycpO1xuICAgICAgICB0aGlzLmJ0bkZhc3QgPSB2aWV3LmdldFZpZXdCeUlkKCdidG5GYXN0Jyk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXR0aW5nKCk7XG4gICAgfVxuXG4gICAgZXZlbnRTZXR0aW5nKCl7XG4gICAgICAgIHRoaXMuYnRuUm9jay5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3Btb3N0ID0gZnJhbWVNb2R1bGUudG9wbW9zdCgpO1xuICAgICAgICAgICAgdG9wbW9zdC5uYXZpZ2F0ZShcImNvbXBvbmVudHMvcm9jay9yb2NrXCIpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJ0bkZhc3Qub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICAgICAgICAgIHRvcG1vc3QubmF2aWdhdGUoXCJjb21wb25lbnRzL2Zhc3QvZmFzdFwiKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoYXJnczogYW55KSB7XG4gICAgbmV3IE1haW5QYWdlKGFyZ3Mub2JqZWN0KTtcbn0iXX0=