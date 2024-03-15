import { UploadActionType } from "@redux/reducers/uploadReducer";
import { UploadVideoType } from "@type/yys_libzeus";

export const saveUploadHistory = (video: UploadVideoType) => ({
    type: UploadActionType.SAVE_UPLOAD_HISTORY,
    payload: video,
});
