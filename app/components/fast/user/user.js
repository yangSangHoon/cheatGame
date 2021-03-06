"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var absolute_layout_1 = require("ui/layouts/absolute-layout");
exports.top = 100;
var User = (function () {
    function User(view) {
        this.move = 0;
        this.view = view;
        this.btn = view.getViewById('btn');
        this.player = view.getViewById('player');
        this.move = Number(view.move);
        this.setPosition();
        this.eventSetting();
    }
    User.prototype.setPosition = function () {
    };
    User.prototype.eventSetting = function () {
        var _this = this;
        this.btn.on(buttonModule.Button.tapEvent, function () {
            absolute_layout_1.AbsoluteLayout.setTop(_this.player, Number(_this.player.top) + 5);
        });
    };
    User.prototype.setMove = function (value) {
    };
    return User;
}());
function onLoad(args) {
    new User(args.object);
}
exports.onLoad = onLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0MsOERBQTBEO0FBQzdDLFFBQUEsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUV2QjtJQU1JLGNBQVksSUFBSTtRQUhSLFNBQUksR0FBVyxDQUFDLENBQUM7UUFJckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsMEJBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxnQ0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHNCQUFPLEdBQVAsVUFBUSxLQUFLO0lBRWIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBR0QsZ0JBQXVCLElBQVM7SUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IHtBYnNvbHV0ZUxheW91dH0gZnJvbSAndWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXQnO1xuZXhwb3J0IGNvbnN0IHRvcCA9IDEwMDtcblxuY2xhc3MgVXNlcntcbiAgICBwcml2YXRlIHZpZXc7XG4gICAgcHJpdmF0ZSBidG47XG4gICAgcHJpdmF0ZSBtb3ZlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGxheWVyO1xuXG4gICAgY29uc3RydWN0b3Iodmlldyl7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuYnRuID0gdmlldy5nZXRWaWV3QnlJZCgnYnRuJyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gdmlldy5nZXRWaWV3QnlJZCgncGxheWVyJyk7XG4gICAgICAgIHRoaXMubW92ZSA9IE51bWJlcih2aWV3Lm1vdmUpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXR0aW5nKCk7XG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24oKSB7XG4gICAgfVxuXG4gICAgZXZlbnRTZXR0aW5nKCkge1xuICAgICAgICB0aGlzLmJ0bi5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICBBYnNvbHV0ZUxheW91dC5zZXRUb3AodGhpcy5wbGF5ZXIsIE51bWJlcih0aGlzLnBsYXllci50b3ApICsgNSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0TW92ZSh2YWx1ZSkge1xuXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoYXJnczogYW55KSB7XG4gICAgbmV3IFVzZXIoYXJncy5vYmplY3QpO1xufVxuIl19