import { UploadVideoType } from "@type/yys_libzeus"

export enum UploadActionType {
    SAVE_UPLOAD_HISTORY = 'SAVE_UPLOAD_HISTORY',
    REMOVE_UPLOAD_HISTORY = 'REMOVE_UPLOAD_HISTORY',
}

type UploadAction = {
    type: UploadActionType,
    payload?: any,
}

export type UploadStateType = {
    uploadHistory: UploadVideoType[]
}

const initialState: UploadStateType = {
    uploadHistory: [],
}

export const uploadReducer = (state = initialState, action: UploadAction): UploadStateType => {
    switch (action.type) {
        case UploadActionType.SAVE_UPLOAD_HISTORY: {
            const newVideo: UploadVideoType = action.payload;

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
        case UploadActionType.REMOVE_UPLOAD_HISTORY: {
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