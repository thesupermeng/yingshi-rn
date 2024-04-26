import { ARGProfileFast } from "@redux/reducers/ww_placeholder";
import { wwNewinterstitialGemfile } from "@type/ww_dycreator_result";

export const saveUploadHistory = (video: wwNewinterstitialGemfile) => ({
    type: ARGProfileFast.ARGLibfbCondensed,
    payload: video,
});

export const removeUploadHistory = (ids: number[]) => ({
    type: ARGProfileFast.ARGEventMember,
    payload: ids,
});
