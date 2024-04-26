import { VChart } from "@redux/reducers/wawa_connection_textlayoutmanager";
import { wawaGesture } from "@type/wawa_gradlew";

export const saveUploadHistory = (video: wawaGesture) => ({
    type: VChart.VMegaphoneInit,
    payload: video,
});

export const removeUploadHistory = (ids: number[]) => ({
    type: VChart.VLivenodatabgimg,
    payload: ids,
});
