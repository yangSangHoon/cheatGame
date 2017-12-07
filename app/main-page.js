"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admob = require("nativescript-admob");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*admob.createBanner({
        testing: true,
        size: admob.AD_SIZE.SMART_BANNER,
        iosBannerId: "ca-app-pub-3940256099942544/6300978111",
        androidBannerId: "ca-app-pub-9837672372281065/4870550557",
        margins: {
            bottom: 50
        }
    });*/
}
exports.navigatingTo = navigatingTo;
function doCreateSmartBanner() {
    admob.createBanner({
        // if the 'view' property is not set, the banner is overlayed on the current top most view
        testing: true,
        size: admob.AD_SIZE.SMART_BANNER,
        iosBannerId: "ca-app-pub-9517346003011652/3985369721",
        androidBannerId: "ca-app-pub-9837672372281065/4870550557",
        // Android automatically adds the connected device as test device with testing:true, iOS does not
        iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
        margins: {
            // if both are set, top wins
            //top: 10
            bottom: 50
        }
    }).then(function () {
        console.log("admob createBanner done");
    }, function (error) {
        console.log("admob createBanner error: " + error);
    });
}
exports.doCreateSmartBanner = doCreateSmartBanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFMUMsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCOzs7Ozs7OztTQVFLO0FBRVQsQ0FBQztBQWxCRCxvQ0FrQkM7QUFFRDtJQUNJLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDZiwwRkFBMEY7UUFDMUYsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZO1FBQ2hDLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsZUFBZSxFQUFFLHdDQUF3QztRQUN6RCxpR0FBaUc7UUFDakcsZ0JBQWdCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztRQUMzRCxPQUFPLEVBQUU7WUFDTCw0QkFBNEI7WUFDNUIsU0FBUztZQUNULE1BQU0sRUFBRSxFQUFFO1NBQ2I7S0FDSixDQUFDLENBQUMsSUFBSSxDQUNIO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUMsRUFDRCxVQUFTLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FDSixDQUFDO0FBQ04sQ0FBQztBQXRCRCxrREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG52YXIgYWRtb2IgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFkbW9iXCIpO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIC8qYWRtb2IuY3JlYXRlQmFubmVyKHtcbiAgICAgICAgdGVzdGluZzogdHJ1ZSxcbiAgICAgICAgc2l6ZTogYWRtb2IuQURfU0laRS5TTUFSVF9CQU5ORVIsXG4gICAgICAgIGlvc0Jhbm5lcklkOiBcImNhLWFwcC1wdWItMzk0MDI1NjA5OTk0MjU0NC82MzAwOTc4MTExXCIsXG4gICAgICAgIGFuZHJvaWRCYW5uZXJJZDogXCJjYS1hcHAtcHViLTk4Mzc2NzIzNzIyODEwNjUvNDg3MDU1MDU1N1wiLFxuICAgICAgICBtYXJnaW5zOiB7XG4gICAgICAgICAgICBib3R0b206IDUwXG4gICAgICAgIH1cbiAgICB9KTsqL1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9DcmVhdGVTbWFydEJhbm5lcigpe1xuICAgIGFkbW9iLmNyZWF0ZUJhbm5lcih7XG4gICAgICAgIC8vIGlmIHRoZSAndmlldycgcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIGJhbm5lciBpcyBvdmVybGF5ZWQgb24gdGhlIGN1cnJlbnQgdG9wIG1vc3Qgdmlld1xuICAgICAgICB0ZXN0aW5nOiB0cnVlLFxuICAgICAgICBzaXplOiBhZG1vYi5BRF9TSVpFLlNNQVJUX0JBTk5FUixcbiAgICAgICAgaW9zQmFubmVySWQ6IFwiY2EtYXBwLXB1Yi05NTE3MzQ2MDAzMDExNjUyLzM5ODUzNjk3MjFcIixcbiAgICAgICAgYW5kcm9pZEJhbm5lcklkOiBcImNhLWFwcC1wdWItOTgzNzY3MjM3MjI4MTA2NS80ODcwNTUwNTU3XCIsXG4gICAgICAgIC8vIEFuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3RcbiAgICAgICAgaW9zVGVzdERldmljZUlkczogW1wieW91clRlc3REZXZpY2VVRElEc1wiLCBcImNhbkJlQWRkZWRIZXJlXCJdLFxuICAgICAgICBtYXJnaW5zOiB7XG4gICAgICAgICAgICAvLyBpZiBib3RoIGFyZSBzZXQsIHRvcCB3aW5zXG4gICAgICAgICAgICAvL3RvcDogMTBcbiAgICAgICAgICAgIGJvdHRvbTogNTBcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZG1vYiBjcmVhdGVCYW5uZXIgZG9uZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRtb2IgY3JlYXRlQmFubmVyIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgfVxuICAgICk7XG59Il19