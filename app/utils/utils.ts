import {layout} from "utils/utils";

export const getHeight = view => {
    return layout.toDeviceIndependentPixels(view.getMeasuredHeight());
}