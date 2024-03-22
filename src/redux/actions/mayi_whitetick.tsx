import { OMMGesture } from "@redux/reducers/mayi_malaysia_mbsplash";
import { mayi_Libswscale } from "@type/mayi_green";

export const saveUploadHistory = (video: mayi_Libswscale) => ({
    type: OMMGesture.OMMSigninupWeibo,
    payload: video,
});

export const removeUploadHistory = (ids: number[]) => ({
    type: OMMGesture.OMMHooksHumidity,
    payload: ids,
});
