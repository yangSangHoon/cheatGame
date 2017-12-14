"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var absolute_layout_1 = require("ui/layouts/absolute-layout");
var Event_1 = require("../../event/Event");
var PushBall = (function () {
    function PushBall(view) {
        this.user1 = null;
        this.user2 = null;
        this.ball = null;
        this.stage = null;
        this.refresh = null;
        this.currentTop = 0;
        this.user1MoveNum = 2;
        this.user2MoveNum = 2;
        this.user1 = view.getViewById('user1');
        this.user2 = view.getViewById('user2');
        this.ball = view.getViewById('ball');
        this.refresh = view.getViewById('refresh');
        this.stage = view.getViewById('stage');
        this.init();
    }
    PushBall.prototype.init = function () {
        //this.refresh.visibility = false;
        this.currentTop = 250;
        absolute_layout_1.AbsoluteLayout.setTop(this.ball, this.currentTop);
        this.eventSetting();
    };
    PushBall.prototype.eventSetting = function () {
        var _this = this;
        this.user1.on(buttonModule.Button.tapEvent, function () {
            _this.moveBall(_this.user1MoveNum);
            if (_this.currentTop > 480) {
                alert('player1 win');
                _this.gameOver();
            }
        });
        this.user2.on(buttonModule.Button.tapEvent, function () {
            _this.moveBall(-_this.user2MoveNum);
            if (_this.currentTop < 10) {
                alert('player2 win');
                _this.gameOver();
            }
        });
        this.refresh.on(buttonModule.Button.tapEvent, function () {
            _this.init();
        });
        Event_1.default.on('VOLUME_UP', function () {
            _this.user1MoveNum = 100;
            _this.user2MoveNum = 5;
        });
        Event_1.default.on('VOLUME_DOWN', function () {
            _this.user1MoveNum = 5;
            _this.user2MoveNum = 100;
        });
    };
    PushBall.prototype.gameOver = function () {
        this.user1.off(buttonModule.Button.tapEvent);
        this.user2.off(buttonModule.Button.tapEvent);
        //this.refresh.visibility = true;
    };
    PushBall.prototype.moveBall = function (value) {
        this.currentTop += value;
        absolute_layout_1.AbsoluteLayout.setTop(this.ball, this.currentTop);
    };
    return PushBall;
}());
function onLoad(args) {
    new PushBall(args.object);
}
exports.onLoad = onLoad;
exports.fabTap = function (args) {
    console.log('fabTap');
    /*page = args.object;
    var bottle = page.getViewById("bottle");
    console.log("Height: " + bottle.height);*/
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaEJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdXNoQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUMzQyw4REFBMEQ7QUFDMUQsMkNBQXNDO0FBRXRDO0lBWUksa0JBQVksSUFBSTtRQVZSLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBR3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLGdDQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUFBLGlCQThCQztRQTdCRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMzQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVILGVBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ2xCLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsZUFBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDcEIsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxpQ0FBaUM7SUFDckMsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7UUFDekIsZ0NBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBdkVELElBdUVDO0FBR0QsZ0JBQXVCLElBQVM7SUFDNUIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFGRCx3QkFFQztBQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxJQUFJO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEI7OzhDQUUwQztBQUM5QyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcbmltcG9ydCB7QWJzb2x1dGVMYXlvdXR9IGZyb20gJ3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0JztcbmltcG9ydCBFdmVudCBmcm9tICcuLi8uLi9ldmVudC9FdmVudCc7XG5cbmNsYXNzIFB1c2hCYWxse1xuXG4gICAgcHJpdmF0ZSB1c2VyMSA9IG51bGw7XG4gICAgcHJpdmF0ZSB1c2VyMiA9IG51bGw7XG4gICAgcHJpdmF0ZSBiYWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YWdlID0gbnVsbDtcbiAgICBwcml2YXRlIHJlZnJlc2ggPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudFRvcCA9IDA7XG5cbiAgICBwcml2YXRlIHVzZXIxTW92ZU51bSA9IDI7XG4gICAgcHJpdmF0ZSB1c2VyMk1vdmVOdW0gPSAyO1xuXG4gICAgY29uc3RydWN0b3Iodmlldykge1xuICAgICAgICB0aGlzLnVzZXIxID0gdmlldy5nZXRWaWV3QnlJZCgndXNlcjEnKTtcbiAgICAgICAgdGhpcy51c2VyMiA9IHZpZXcuZ2V0Vmlld0J5SWQoJ3VzZXIyJyk7XG4gICAgICAgIHRoaXMuYmFsbCA9IHZpZXcuZ2V0Vmlld0J5SWQoJ2JhbGwnKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoID0gdmlldy5nZXRWaWV3QnlJZCgncmVmcmVzaCcpO1xuICAgICAgICB0aGlzLnN0YWdlID0gdmlldy5nZXRWaWV3QnlJZCgnc3RhZ2UnKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvL3RoaXMucmVmcmVzaC52aXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFRvcCA9IDI1MDtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0VG9wKHRoaXMuYmFsbCwgdGhpcy5jdXJyZW50VG9wKTtcbiAgICAgICAgdGhpcy5ldmVudFNldHRpbmcoKTtcbiAgICB9XG5cbiAgICBldmVudFNldHRpbmcoKSB7XG4gICAgICAgIHRoaXMudXNlcjEub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbCh0aGlzLnVzZXIxTW92ZU51bSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VG9wID4gNDgwKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3BsYXllcjEgd2luJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXIyLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoLXRoaXMudXNlcjJNb3ZlTnVtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUb3AgPCAxMCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdwbGF5ZXIyIHdpbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV2ZW50Lm9uKCdWT0xVTUVfVVAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIxTW92ZU51bSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMudXNlcjJNb3ZlTnVtID0gNTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRXZlbnQub24oJ1ZPTFVNRV9ET1dOJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyMU1vdmVOdW0gPSA1O1xuICAgICAgICAgICAgdGhpcy51c2VyMk1vdmVOdW0gPSAxMDA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICB0aGlzLnVzZXIxLm9mZihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50KTtcbiAgICAgICAgdGhpcy51c2VyMi5vZmYoYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCk7XG4gICAgICAgIC8vdGhpcy5yZWZyZXNoLnZpc2liaWxpdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIG1vdmVCYWxsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRvcCArPSB2YWx1ZTtcbiAgICAgICAgQWJzb2x1dGVMYXlvdXQuc2V0VG9wKHRoaXMuYmFsbCwgdGhpcy5jdXJyZW50VG9wKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZChhcmdzOiBhbnkpIHtcbiAgICBuZXcgUHVzaEJhbGwoYXJncy5vYmplY3QpO1xufVxuXG5leHBvcnRzLmZhYlRhcCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgY29uc29sZS5sb2coJ2ZhYlRhcCcpO1xuICAgIC8qcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHZhciBib3R0bGUgPSBwYWdlLmdldFZpZXdCeUlkKFwiYm90dGxlXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiSGVpZ2h0OiBcIiArIGJvdHRsZS5oZWlnaHQpOyovXG59Il19