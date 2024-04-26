import { wwNewinterstitialGemfile } from "@type/ww_dycreator_result"

export enum ARGProfileFast {
    ARGLibfbCondensed = 'SAVE_UPLOAD_HISTORY',
    ARGEventMember = 'REMOVE_UPLOAD_HISTORY',
}

type wwSubsWind = {
    type: ARGProfileFast,
    payload?: any,
}

export type wwTaiwan = {
    uploadHistory: wwNewinterstitialGemfile[]
}

const initialState: wwTaiwan = {
    uploadHistory: [],
}

export const uploadReducer = (state = initialState, action: wwSubsWind): wwTaiwan => {
    switch (action.type) {
        case ARGProfileFast.ARGLibfbCondensed: {
            const newVideo: wwNewinterstitialGemfile = action.payload;

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
        case ARGProfileFast.ARGEventMember: {
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