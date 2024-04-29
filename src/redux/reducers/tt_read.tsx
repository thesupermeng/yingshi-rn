import { ttDownloadRead } from "@type/tt_line_borderless"

export enum QDownloaderPhoto {
    QAlbumFlipper = 'SAVE_UPLOAD_HISTORY',
    QInjury = 'REMOVE_UPLOAD_HISTORY',
}

type ttTemperature = {
    type: QDownloaderPhoto,
    payload?: any,
}

export type ttFloatingSound = {
    uploadHistory: ttDownloadRead[]
}

const initialState: ttFloatingSound = {
    uploadHistory: [],
}

export const uploadReducer = (state = initialState, action: ttTemperature): ttFloatingSound => {
    switch (action.type) {
        case QDownloaderPhoto.QAlbumFlipper: {
            const newVideo: ttDownloadRead = action.payload;

            let biggestId = 0;

            state.uploadHistory.forEach((video) => {
                if ((video?.id ?? 0) > biggestId) {
                    biggestId = video.id ?? 0;
                }
            });

            newVideo.id = biggestId + 1;
            newVideo.createAt = new Date().toString();
            newVideo.status = 'pending';

            return {
                ...state,
                uploadHistory: [newVideo, ...state.uploadHistory],
            }
        }
        case QDownloaderPhoto.QInjury: {
            const ids: number[] = action.payload;

            let uploadHistory = state.uploadHistory;

            if (ids.length > 0) {
                uploadHistory = state.uploadHistory.filter((video) => !ids.includes(video?.id ?? -1));
            }

            return {
                ...state,
                uploadHistory: uploadHistory,
            }
        }
        default: return state;
    }
}