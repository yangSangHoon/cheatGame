"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fast = (function () {
    function Fast(view) {
        this.user1 = view.getViewById('user1');
        this.user2 = view.getViewById('user2');
    }
    Fast.prototype.init = function () {
    };
    return Fast;
}());
function onLoad(args) {
    new Fast(args.object);
}
exports.onLoad = onLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTtJQUlJLGNBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG1CQUFJLEdBQUo7SUFDQSxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBRUQsZ0JBQXVCLElBQVM7SUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcbmltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5jbGFzcyBGYXN0e1xuICAgIHByaXZhdGUgdXNlcjE7XG4gICAgcHJpdmF0ZSB1c2VyMjtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcpe1xuICAgICAgICB0aGlzLnVzZXIxID0gdmlldy5nZXRWaWV3QnlJZCgndXNlcjEnKTtcbiAgICAgICAgdGhpcy51c2VyMiA9IHZpZXcuZ2V0Vmlld0J5SWQoJ3VzZXIyJyk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoYXJnczogYW55KSB7XG4gICAgbmV3IEZhc3QoYXJncy5vYmplY3QpO1xufSJdfQ==