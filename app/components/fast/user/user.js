"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var User = (function () {
    function User(page) {
        this.btn = page.getViewById('btn');
        this.eventSetting();
    }
    User.prototype.eventSetting = function () {
        this.btn.on(buttonModule.Button.tapEvent, function () {
            alert(1);
        });
    };
    User.prototype.move = function () {
        alert('move');
    };
    return User;
}());
function onLoad(args) {
    return new User(args.object);
}
exports.onLoad = onLoad;
function move(value) {
    alert(value);
}
exports.move = move;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFFM0M7SUFHSSxjQUFZLElBQUk7UUFDWixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUNJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFHRCxnQkFBdUIsSUFBUztJQUM1QixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCx3QkFFQztBQUVELGNBQXFCLEtBQUs7SUFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ2hCLENBQUM7QUFGRCxvQkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidXR0b25Nb2R1bGUgPSByZXF1aXJlKFwidWkvYnV0dG9uXCIpO1xuXG5jbGFzcyBVc2Vye1xuICAgIHByaXZhdGUgYnRuO1xuXG4gICAgY29uc3RydWN0b3IocGFnZSl7XG4gICAgICAgIHRoaXMuYnRuID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuJyk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXR0aW5nKCk7XG4gICAgfVxuXG4gICAgZXZlbnRTZXR0aW5nKCkge1xuICAgICAgICB0aGlzLmJ0bi5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydCgxKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIGFsZXJ0KCdtb3ZlJyk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoYXJnczogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBVc2VyKGFyZ3Mub2JqZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmUodmFsdWUpe1xuICAgIGFsZXJ0KHZhbHVlKVxufSJdfQ==