import { QDownloaderPhoto } from "@redux/reducers/tt_read";
import { ttDownloadRead } from "@type/tt_line_borderless";

export const saveUploadHistory = (video: ttDownloadRead) => ({
    type: QDownloaderPhoto.QAlbumFlipper,
    payload: video,
});

export const removeUploadHistory = (ids: number[]) => ({
    type: QDownloaderPhoto.QInjury,
    payload: ids,
});
