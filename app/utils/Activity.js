"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var Event_1 = require("../event/Event");
var Activity = (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activity.prototype.onCreate = function (savedInstanceState) {
        if (!this._callbacks) {
            frame_1.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, _super.prototype.onCreate);
    };
    Activity.prototype.onSaveInstanceState = function (outState) {
        this._callbacks.onSaveInstanceState(this, outState, _super.prototype.onSaveInstanceState);
    };
    Activity.prototype.onStart = function () {
        this._callbacks.onStart(this, _super.prototype.onStart);
    };
    Activity.prototype.onStop = function () {
        this._callbacks.onStop(this, _super.prototype.onStop);
    };
    Activity.prototype.onDestroy = function () {
        this._callbacks.onDestroy(this, _super.prototype.onDestroy);
    };
    Activity.prototype.onBackPressed = function () {
        this._callbacks.onBackPressed(this, _super.prototype.onBackPressed);
    };
    Activity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    };
    Activity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    };
    Activity.prototype.dispatchKeyEvent = function (event) {
        // Which direction did the key move (up/down)
        var action = event.getAction();
        // What keywas pressed
        var keyCode = event.getKeyCode();
        switch (keyCode) {
            case android.view.KeyEvent.KEYCODE_VOLUME_UP:
                // Check your event code (KeyEvent.ACTION_DOWN, KeyEvent.ACTION_UP etc)
                console.log("KEYCODE_VOLUME_UP!!!");
                Event_1.default.dispatch('VOLUME_UP');
                return true;
            case android.view.KeyEvent.KEYCODE_VOLUME_DOWN:
                // Check your event code (KeyEvent.ACTION_DOWN, KeyEvent.ACTION_UP etc)
                console.log("KEYCODE_VOLUME_DOWN!!!");
                Event_1.default.dispatch('VOLUME_DOWN');
                return true;
            default:
                // Let the system do what it wanted to do
                return _super.prototype.dispatchKeyEvent.call(this, event);
        }
    };
    Activity = __decorate([
        JavaProxy("com.tns.MyActivity")
    ], Activity);
    return Activity;
}(android.app.Activity));
exports.default = Activity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUF3RTtBQUN4RSx3Q0FBbUM7QUFHbkM7SUFBc0MsNEJBQW9CO0lBQTFEOztJQThEQSxDQUFDO0lBM0RhLDJCQUFRLEdBQWxCLFVBQW1CLGtCQUFxQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLDRCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsaUJBQU0sUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVTLHNDQUFtQixHQUE3QixVQUE4QixRQUEyQjtRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsaUJBQU0sbUJBQW1CLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRVMsMEJBQU8sR0FBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsaUJBQU0sT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVTLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGlCQUFNLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyw0QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxpQkFBTSxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sZ0NBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsaUJBQU0sYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLDZDQUEwQixHQUFqQyxVQUFrQyxXQUFtQixFQUFFLFdBQTBCLEVBQUUsWUFBMkI7UUFDMUcsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVTLG1DQUFnQixHQUExQixVQUEyQixXQUFtQixFQUFFLFVBQWtCLEVBQUUsSUFBNEI7UUFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sZ0JBQWdCLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRU0sbUNBQWdCLEdBQXZCLFVBQXdCLEtBQUs7UUFDekIsNkNBQTZDO1FBQzdDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUvQixzQkFBc0I7UUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQjtnQkFDeEMsdUVBQXVFO2dCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3BDLGVBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUI7Z0JBQzFDLHVFQUF1RTtnQkFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0QyxlQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCO2dCQUNJLHlDQUF5QztnQkFDekMsTUFBTSxDQUFDLGlCQUFNLGdCQUFnQixZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDTCxDQUFDO0lBN0RnQixRQUFRO1FBRDVCLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztPQUNYLFFBQVEsQ0E4RDVCO0lBQUQsZUFBQztDQUFBLEFBOURELENBQXNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQThEekQ7a0JBOURvQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXRBY3Rpdml0eUNhbGxiYWNrcywgQW5kcm9pZEFjdGl2aXR5Q2FsbGJhY2tzfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCBFdmVudCBmcm9tICcuLi9ldmVudC9FdmVudCc7XG5cbkBKYXZhUHJveHkoXCJjb20udG5zLk15QWN0aXZpdHlcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2aXR5IGV4dGVuZHMgYW5kcm9pZC5hcHAuQWN0aXZpdHkge1xuICAgIHByaXZhdGUgX2NhbGxiYWNrczogQW5kcm9pZEFjdGl2aXR5Q2FsbGJhY2tzO1xuXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlKHNhdmVkSW5zdGFuY2VTdGF0ZTogYW5kcm9pZC5vcy5CdW5kbGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHNldEFjdGl2aXR5Q2FsbGJhY2tzKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQ3JlYXRlKHRoaXMsIHNhdmVkSW5zdGFuY2VTdGF0ZSwgc3VwZXIub25DcmVhdGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblNhdmVJbnN0YW5jZVN0YXRlKG91dFN0YXRlOiBhbmRyb2lkLm9zLkJ1bmRsZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25TYXZlSW5zdGFuY2VTdGF0ZSh0aGlzLCBvdXRTdGF0ZSwgc3VwZXIub25TYXZlSW5zdGFuY2VTdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblN0YXJ0KHRoaXMsIHN1cGVyLm9uU3RhcnQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblN0b3AodGhpcywgc3VwZXIub25TdG9wKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25EZXN0cm95KHRoaXMsIHN1cGVyLm9uRGVzdHJveSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQmFja1ByZXNzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vbkJhY2tQcmVzc2VkKHRoaXMsIHN1cGVyLm9uQmFja1ByZXNzZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJlcXVlc3RQZXJtaXNzaW9uc1Jlc3VsdChyZXF1ZXN0Q29kZTogbnVtYmVyLCBwZXJtaXNzaW9uczogQXJyYXk8U3RyaW5nPiwgZ3JhbnRSZXN1bHRzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblJlcXVlc3RQZXJtaXNzaW9uc1Jlc3VsdCh0aGlzLCByZXF1ZXN0Q29kZSwgcGVybWlzc2lvbnMsIGdyYW50UmVzdWx0cywgdW5kZWZpbmVkIC8qVE9ETzogRW5hYmxlIGlmIG5lZWRlZCovKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BY3Rpdml0eVJlc3VsdChyZXF1ZXN0Q29kZTogbnVtYmVyLCByZXN1bHRDb2RlOiBudW1iZXIsIGRhdGE6IGFuZHJvaWQuY29udGVudC5JbnRlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQWN0aXZpdHlSZXN1bHQodGhpcywgcmVxdWVzdENvZGUsIHJlc3VsdENvZGUsIGRhdGEsIHN1cGVyLm9uQWN0aXZpdHlSZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaEtleUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIC8vIFdoaWNoIGRpcmVjdGlvbiBkaWQgdGhlIGtleSBtb3ZlICh1cC9kb3duKVxuICAgICAgICBsZXQgYWN0aW9uID0gZXZlbnQuZ2V0QWN0aW9uKCk7XG5cbiAgICAgICAgLy8gV2hhdCBrZXl3YXMgcHJlc3NlZFxuICAgICAgICBsZXQga2V5Q29kZSA9IGV2ZW50LmdldEtleUNvZGUoKTtcblxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgYW5kcm9pZC52aWV3LktleUV2ZW50LktFWUNPREVfVk9MVU1FX1VQOlxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHlvdXIgZXZlbnQgY29kZSAoS2V5RXZlbnQuQUNUSU9OX0RPV04sIEtleUV2ZW50LkFDVElPTl9VUCBldGMpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLRVlDT0RFX1ZPTFVNRV9VUCEhIVwiKTtcbiAgICAgICAgICAgICAgICBFdmVudC5kaXNwYXRjaCgnVk9MVU1FX1VQJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlIGFuZHJvaWQudmlldy5LZXlFdmVudC5LRVlDT0RFX1ZPTFVNRV9ET1dOOlxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHlvdXIgZXZlbnQgY29kZSAoS2V5RXZlbnQuQUNUSU9OX0RPV04sIEtleUV2ZW50LkFDVElPTl9VUCBldGMpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLRVlDT0RFX1ZPTFVNRV9ET1dOISEhXCIpO1xuICAgICAgICAgICAgICAgIEV2ZW50LmRpc3BhdGNoKCdWT0xVTUVfRE9XTicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBMZXQgdGhlIHN5c3RlbSBkbyB3aGF0IGl0IHdhbnRlZCB0byBkb1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXBlci5kaXNwYXRjaEtleUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=