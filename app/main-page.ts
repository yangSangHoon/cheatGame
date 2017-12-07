
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
var admob = require("nativescript-admob");

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;

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

export function doCreateSmartBanner(){
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
    }).then(
        function() {
            console.log("admob createBanner done");
        },
        function(error) {
            console.log("admob createBanner error: " + error);
        }
    );
}